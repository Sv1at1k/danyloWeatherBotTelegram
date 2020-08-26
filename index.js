var TelegramBot = require('node-telegram-bot-api');
const  {config} = require('./config/config');



var telegram = new TelegramBot(config.botToken, { polling: true });

telegram.onText(/^(.*?(\weater\b)[^$]*)$/, (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});