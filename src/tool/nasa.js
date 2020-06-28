const axios = require("axios");
const { FileBox } = require("file-box");

// 配置文件
const config = require("../../config/config");

module.exports = (msg) => {
  return new Promise(async (resolve, reject) => {
    let requestUrl = `https://api.nasa.gov/planetary/apod?api_key=${config.nasa}`;

    axios
      .get(requestUrl)
      .then(async (response) => {
        let title = response.data.title;
        let url = response.data.url;
        console.log(url);
        const fileBox = FileBox.fromUrl(url);
        await msg.say(fileBox);

        resolve(title);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
