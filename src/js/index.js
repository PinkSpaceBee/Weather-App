'use strict';
import * as weatherApi from './api-functions';

const searchBtn = document.querySelector('.search-bar > button');

searchBtn.addEventListener('click', () => {
    // fetch data from the form
    const city = weatherApi.getCityName(document.querySelector('input'));

    weatherApi.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApi.KEY}`, city)
        .then((response) => {
            console.log(response);
            weatherApi.getWeatherData(response.lat, response.lon, `https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&exclude=minutely,alerts&appid=${weatherApi.KEY}&units=metric`);
        })
});


//weatherApi.getWeatherData();