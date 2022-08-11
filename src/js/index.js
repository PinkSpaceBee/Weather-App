'use strict';
import * as weatherApi from './api-functions';
import * as domFunc from './dom-functions';

const searchBtn = document.querySelector('.search-bar > button');
let city = 'kyiv';

function displayWeather() {
    // get lat and lon
    weatherApi.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApi.KEY}`, city)
        .then((response) => {
            // get weather data
            const weather = weatherApi.getWeatherData(response.lat, response.lon, `https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&exclude=minutely,alerts&appid=${weatherApi.KEY}&units=metric`);
   
            weather.then((response) => {
                console.log(response);
                // create section to display current weather data
                domFunc.displayCurrWeather(document.querySelector('.weather-data'), response.current.temp, response.current.weather[0].description, response.current.feels_like, response.current.wind_speed, response.current.humidity);
            })
        }) 
}

displayWeather();

searchBtn.addEventListener('click', () => {
    // reassign input
    city = document.querySelector('.search-bar > input');
    city = city.value;
    // clear weather section
    domFunc.clearWeatherDiv(document.querySelector('.weather-data'));
    displayWeather();
    // clear input
    document.querySelector('.search-bar > input').value = '';
});
