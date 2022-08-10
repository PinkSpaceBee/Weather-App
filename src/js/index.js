'use strict';
import * as weatherApi from './api-functions';

const searchBtn = document.querySelector('.search-bar > button');

searchBtn.addEventListener('click', () => {
    // fetch data from the form
    const city = weatherApi.getCityName(document.querySelector('input'));

    weatherApi.geocode(city)
        .then((response) => {
            console.log(response);
            weatherApi.getWeatherData(response.lat, response.lon);
        })
});


//weatherApi.getWeatherData();