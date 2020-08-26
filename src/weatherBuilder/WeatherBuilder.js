const axios = require('axios');
const {config} = require('../../config/config');


const buildWeaterData = (weatherType,temperature,temperatureFeelsLike ) => {
    const data ={
        img: "",
        description: weatherType,
        temperature: temperature
    }
    return data;
}

module.exports.getWeather = async  () => {
   return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=${config.weatherApiKey}`)
        .then(response => {
            const weatherType = response.data.weather[0].main;
            const temperature = response.data.main.temp;
            const temperatureFeelsLike = response.data.main.feels_like;
            return buildWeaterData(weatherType , temperature , temperatureFeelsLike );
        })
        .catch(error => {
            return ("Вельмишановний братан , сорі я відпочиваю!");
        });
}