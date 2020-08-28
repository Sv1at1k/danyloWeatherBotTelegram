const {
  Telegraf
} = require('telegraf')


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


bot.on('message', (ctx) => {
  const message = ctx.update.message.text;
  const messageSender = ctx.update.message.from.username;
  if (readComand.weather(message)) {
    getWeather().then(data => ctx.replyWithPhoto({
        source: data.img
      }, {
        caption: data.description
      }
    ))

  }
  if (readComand.whoIAm(message)) {
    const responce = messageSender === "sviatkk" ? "Ти святік!" : "Ти не святік!!!";
    ctx.reply(responce);
  }
});
bot.launch();