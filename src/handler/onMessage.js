const { Message } = require("wechaty")
const { FileBox } = require("file-box")

module.exports = bot => {
    return async function onMessage(msg) {
        // 判断消息来自自己，直接return
        if (msg.self()) return

        console.log("=============================")
        console.log(`msg : ${msg}`)
        console.log(
            `from: ${msg.from() ? msg.from().name() : null}: ${
            msg.from() ? msg.from().id : null
            }`
        )
        console.log(`to: ${msg.to()}`)
        console.log(`text: ${msg.text()}`)
        console.log(`isRoom: ${msg.room()}`)
        console.log("=============================")

        if (msg.type() == Message.Type.Text) {
            if(msg.text() === "测试") {
                await msg.say("Test is OK!")
            }
            else if (msg.text() === "二呆") {
                const daiPhoto = FileBox.fromFile('img/daidai.jpeg')
                await msg.say(daiPhoto)
            }
            else {
                await msg.say("装疯卖傻中 ♪(´ε｀ )")
            }
        }
        else {
            await msg.say("目前只看得懂文字啦 ♪(´ε｀ )")
        }
    }
}