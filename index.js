const { Telegraf } = require('telegraf')


const {
  config
} = require('./config/config');
const {
  readComand
} = require('./src/commandReader/commandReader');
const {
  getWeather
} = require('./src/weatherBuilder/WeatherBuilder');

const bot = new Telegraf(config.botToken);

bot.launch();
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const message = msg.text;

//   if (readComand.weather(message)) {
//     getWeather().then(data => bot.sendMessage(chatId, JSON.stringify(data)))

//   }

//   if (readComand.whoIAm(message)) {
//      const responce =  msg.from.username === "sviatkk" ?  "Ти святік!" : "Ти не святік!!!";
//      bot.sendMessage(chatId, responce);
//   }

// });

bot.on('message', (ctx) => {
  const message = ctx.update.message.text;
  const messageSender = ctx.update.message.from.username;
    if (readComand.weather(message)) {
      getWeather().then(data => ctx.reply(JSON.stringify(data)))

    }

    if (readComand.whoIAm(message)) {
      const responce =  messageSender === "sviatkk" ?  "Ти святік!" : "Ти не святік!!!";
      ctx.reply(responce);
    }


})