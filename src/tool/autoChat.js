// 请求参数解码
const urlencode = require("urlencode")

const fetch = require('node-fetch')

// 配置文件
const config = require("../../config/config")

module.exports = (msg) => {
    return new Promise(async (resolve, reject) => {
        let requestUrl = `https://api.ownthink.com/bot?appid=${config.robotKey}&userid=${msg.from().id}&spoken=${urlencode(msg.text())}`;
        
        const response = await fetch(requestUrl);
        let res = await response.json();

        if (res.message === "success") {
            console.log((res.data.info.text).replace(/小思/g, "Tom"))
            resolve((res.data.info.text).replace(/小思/g, "Tom"))
        }
        else {
            resolve("装疯卖傻中 ♪(´ε｀ )")
        }
    })
}