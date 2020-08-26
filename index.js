var TelegramBot = require('node-telegram-bot-api');
const {
  config
} = require('./config/config');
const {
  readComand
} = require('./src/commandReader/commandReader');
const {
  getWeather
} = require('./src/weatherBuilder/WeatherBuilder');


var telegram = new TelegramBot(config.botToken, {
  polling: true
});

telegram.on('message', (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  if (readComand.weather(message)) {
    getWeather().then(data => telegram.sendMessage(chatId, data))

  }

  if (readComand.whoIAm(message)) {
    telegram.sendMessage(chatId, "You are not danylo");
  }

});