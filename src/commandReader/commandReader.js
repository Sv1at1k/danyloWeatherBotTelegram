const {weatherTriggers} = require('../../const/weatherTriggers');

const weather= (comand) => {
  return  weatherTriggers.some(trigger=>comand.includes(trigger));
}

const whoIsPidr = (comand) => {
    return  comand ? comand.toLowerCase().includes("хто підар") : false;
}

module.exports.readComand = {
    weather,
    whoIsPidr
}