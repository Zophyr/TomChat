const axios = require("axios");
const { FileBox } = require("file-box");

// 配置文件
const config = require("../../config/config");

module.exports = (msg, length) => {
  return new Promise(async (resolve, reject) => {
    let theDate = new Date();
    let month = theDate.getMonth() + 1;
    let date = theDate.getDate();

    let requestUrl = `http://api.avatardata.cn/HistoryToday/LookUp?key=${config.avatardata_history}&yue=${month}&ri=${date}&type=1&page=1&rows=${length}`;
    axios.get(requestUrl).then(async (response) => {
      let result = response.data.result;
      let rp = `历史上的${month}月${date}日：\n`;
      result.forEach((element) => {
        rp += element.year + "年：" + element.title + "\n";
      });
      resolve(rp);
    });
  });
};
