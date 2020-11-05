const {
  Telegraf
} = require('telegraf')

const cron = require('node-cron');
const {
  config
} = require('./config/config');
const {
  readComand
} = require('./src/commandReader/commandReader');
const {
  getWeather
} = require('./src/weatherBuilder/WeatherBuilder');

const {
  broterPhrases
} = require('./const/phrases');

const bot = new Telegraf(config.botToken);


bot.command("who_is_pidr", (ctx) =>  ctx.replyWithPhoto({ source: './img/pidr.jpg'},{caption: '😅😅😅' }))
bot.command("weather", (ctx) =>  getWeather().then(data => ctx.replyWithPhoto({source: data.img}, {caption: data.description})))

cron.schedule('00 10 * * *', function () {
  var todayText = broterPhrases[Math.floor(Math.random() * broterPhrases.length)];
  var message = `Доброго ранку!\nВсім бажаю продуктивного дня.\n<b>${todayText.phrase}.</b> \n<i>${todayText.author}</i>`
  bot.telegram.sendPhoto(
    '-1001310081722', 
    { source: './img/smart_danylo.jpg'},
    {caption: message , parse_mode: 'HTML'})

});

// bot.telegram.sendPhoto(
//   '-1001310081722', 
//   { source: './img/pidr.jpg.jpg'},
//   {caption: "Ну привіт)" , parse_mode: 'HTML'})
bot.launch();