const {weatherTriggers} = require('../../const/weatherTriggers');

const weather= (comand) => {
  return  weatherTriggers.some(trigger=>comand.includes(trigger));
}

const whoIAm = (comand) => {
    return  comand === "Хто я?"
}

module.exports.readComand = {
    weather,
    whoIAm
}