// node-request请求模块包
const request = require("request")
// 请求参数解码
const urlencode = require("urlencode")

const fetch = require('node-fetch')

// 配置文件
const config = require("../../config/config")

module.exports = (info) => {
    return new Promise(async (resolve, reject) => {
        let city = info.replace(/\s+/g, "").replace(/[\n\r]/g, "").replace("天气", "") || "东莞"
        let baseUrl = `https://free-api.heweather.net/s6/weather/now?location=${urlencode(city)}&key=${config.weatherKey}`
        let lifeUrl = `https://free-api.heweather.net/s6/weather/lifestyle?location=${urlencode(city)}&key=${config.weatherKey}`

        const responseBase = await fetch(baseUrl);
        const resBase = await responseBase.json();

        const responseLife = await fetch(lifeUrl);
        const resLife = await responseLife.json();

        resolve(showWeather(resBase.HeWeather6[0], resLife.HeWeather6[0]))
    })
}

function showWeather(resBase, resLife) {
    let basic = "📍" + resBase.basic.location + "当前气温 " + resBase.now.tmp + "°C，天气" + resBase.now.cond_txt
    let advice = "🍄体感：" + resLife.lifestyle.find(element => element.type == "comf").txt
    let wear = "👘穿衣：" + resLife.lifestyle.find(element => element.type == "drsg").txt
    let sport = "🏃‍运动：" + resLife.lifestyle.find(element => element.type == "sport").brf + "运动" + "，" + resLife.lifestyle.find(element => element.type == "sport").txt
    let travel = "🎒外出：" + resLife.lifestyle.find(element => element.type == "trav").txt

    return basic + '\n\n' + advice + '\n\n' + wear + '\n\n' + sport + '\n\n' + travel
}