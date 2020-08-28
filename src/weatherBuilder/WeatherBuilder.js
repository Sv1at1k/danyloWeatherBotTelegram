const axios = require('axios');
const {config} = require('../../config/config');
const {weatherTypes} = require('../../const/weatherTypes');

//i added this package just for fun))))) 13 weekly downloads_))))))))))))))
const kelvinToCelsius = require('kelvin-to-celsius');

const buildWeaterData = (weatherType,temperature,temperatureFeelsLike ) => {
    console.log(weatherType)
    const data ={
        img: weatherTypes[weatherType].img,
        description: ` ${weatherTypes[weatherType].description} Температура: ${kelvinToCelsius(temperature)}\xB0C. Відчувається: ${kelvinToCelsius(temperatureFeelsLike)}\xB0C.`,
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

//function to conver farenheit to celsius
function fToC(fahrenheit) {
  
    return (fahrenheit-32) / 1.8;
} 