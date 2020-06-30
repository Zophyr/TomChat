const { Message } = require("wechaty");

const config = require("../../config/config");
const logMSG = require("../tool/log");
const getWeatcher = require("../tool/weather");
const getAnswer = require("../tool/autoChat");
const forTomato = require("../tool/tomato");
const getHistory = require("../tool/historyToday");

module.exports = (bot) => {
  return async function onMessage(msg) {
    // 判断消息来自自己或三分钟前的消息，直接return
    if (msg.self() || msg.age() > 180) return

    logMSG(msg);

    if (msg.type() == Message.Type.Text) {
      if (msg.text() === "nasa") {
        let rp = await getHistory(msg, 3);
        await msg.say(rp);
      } else if (msg.from().id === config.tomato) {
        let rp = await forTomato(msg);
        await msg.say(rp);
      } else if (/.*天气$/.test(msg.text())) {
        let rp = await getWeatcher(msg.text());
        await msg.say(rp);
      } else {
        let rp = await getAnswer(msg);
        await msg.say(rp);
      }
    } else {
      await msg.say("目前只看得懂文字啦 ♪(´ε｀ )");
    }
  };
};
