// node-request请求模块包
const request = require("request")
// 请求参数解码
const urlencode = require("urlencode")

// 配置文件
const config = require("../../config/config")

module.exports = (info) => {
    return new Promise((resolve, reject) => {
        let city = info.replace(/\s+/g, "").replace(/[\n\r]/g, "").replace("天气", "") || "东莞"
        let url = `https://free-api.heweather.net/s6/weather/now?location=${urlencode(city)}&key=${config.weatherKey}`

        request(url, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                let res = JSON.parse(body).HeWeather6[0]
                if (res.status === "ok") {
                    resolve(city + "现在天气：" + res.now.tmp + "°C")
                }
                else {
                    resolve(res.status)
                }
            }
            else {
                resolve("请求失败")
            }
        })
    })
}