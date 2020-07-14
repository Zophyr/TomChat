const { Wechaty } = require("wechaty");

// padplus协议包
const { PuppetPadplus } = require("wechaty-puppet-padplus");

// 配置文件
const config = require("../config/config");

const onScan = require("./handler/onScan"); // 扫描二维码监听回调
const onMessage = require("./handler/onMessage"); // 消息监听回调
const onReady = require("./handler/onReady");
// const { initDB } = require("./tool/initDB");

const { WechatyVorpal } = require('wechaty-vorpal');
const { MathMaster } = require('wechaty-vorpal-contrib');

const vorpalExtensionList = [
  MathMaster(), // <- Put our vorpal contrib extensions at here.
];

const VorpalPlugin = WechatyVorpal({
  room: '20061990628@chatroom',
  use: vorpalExtensionList,
  mention: true
});

// 初始化
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token,
  }),
  name: config.name,
});

bot.use(VorpalPlugin);
// bot.use(onReady());

bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("login", async (user) => {
    console.log(`User ${user} logined`);
    // await initDB();
  })
  .on("message", onMessage(bot)) // 消息监听
  .on("ready", onReady(bot))
  .start();
