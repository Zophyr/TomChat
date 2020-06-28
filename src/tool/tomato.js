const { FileBox } = require("file-box");

const getAnswer = require("./autoChat");

module.exports = (msg) => {
  return new Promise(async (resolve, reject) => {
    if (msg.text() === "二呆") {
      const daiPhoto = FileBox.fromFile("img/daidai.jpeg");
      resolve(daiPhoto);
    } else if (/.*你好.*/.test(msg.text())) {
      resolve("你好呀，二呆姐姐 （*＾3＾）");
    } else if (/.*哈喽.*/.test(msg.text())) {
      resolve("二呆姐姐你好 o(｀ω´ )o");
    } else if (/.*hello.*/.test(msg.text()) || /.*hi.*/.test(msg.text())) {
      resolve("nice to meet u, Erdai sister （≧∇≦）");
    }
    else {
      let rp = await getAnswer(msg);
      resolve(rp);
    }
  });
};
