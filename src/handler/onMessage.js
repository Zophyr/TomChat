const { Message } = require("wechaty");
const { FileBox } = require("file-box");

const logMSG = require("../tool/log");
const getWeatcher = require("../tool/weather");
const getAnswer = require("../tool/autoChat");

module.exports = bot => {
    return async function onMessage(msg) {
        // 判断消息来自自己或三分钟前的消息，直接return
        if (msg.self() || msg.age() > 180) return

        logMSG(msg)

        if (msg.type() == Message.Type.Text) {
            if (msg.text() === "测试") {
                await msg.say("Test is OK!")
            }
            else if (msg.text() === "二呆") {
                const daiPhoto = FileBox.fromFile('img/daidai.jpeg')
                await msg.say(daiPhoto)
            }
            else if (msg.text() === "你好" && msg.from().id === "wxid_69pagw415kvj22") {
                await msg.say("你好呀，二呆姐姐 （*＾3＾）")
            }
            else if (msg.text() === "哈喽" && msg.from().id === "wxid_69pagw415kvj22") {
                await msg.say("二呆姐姐你好 o(｀ω´ )o")
            }
            else if (msg.text() === "hello" && msg.from().id === "wxid_69pagw415kvj22") {
                await msg.say("nice to meet u, Erdai sister （≧∇≦）")
            }
            else if (/.*天气$/.test(msg.text())) {
                let rp = await getWeatcher(msg.text())
                await msg.say(rp)
            }
            else {
                let rp = await getAnswer(msg);
                await msg.say(rp)
            }
        }
        else {
            await msg.say("目前只看得懂文字啦 ♪(´ε｀ )")
        }
    }
}