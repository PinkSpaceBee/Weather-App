'use strict';
import * as weatherApi from './api-functions';
import * as domFunc from './dom-functions';

let city = 'kyiv';
const searchBtn = document.querySelector('.search-bar > button');
let weather;

async function getWeatherData() {
    try {
        const geocode = await weatherApi.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApi.KEY}`, city);

        // get all weather data for selected city
        weather = await weatherApi.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${weatherApi.KEY}&units=metric`);
    } catch (err) {
        // so the misspelled location name isn't displayed
        city = 'kyiv';

        console.log(err);
        // display error message
        const errMessage = document.createElement('p');
        document.querySelector('.city-time').prepend(errMessage);
        errMessage.textContent = 'No results';
    }

    return weather;
}


async function displayCityDate(container) {
    const data = await getWeatherData();
    // clear the container when before creating it
    domFunc.removeChildren(container);
    domFunc.setCityDate(data.timezone_offset, city, container);
}

displayCityDate(document.querySelector('.city-time'));

async function displayWeather() {
    const weather = await getWeatherData();

    function getTime(elem) {
        const d = new Date();
        const localTime = elem.dt * 1000;
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;

        const city = utc + (weather.timezone_offset * 1000);
        let cityTime = new Date(city).toLocaleTimeString('en-US', { hour12: false }).slice(0, 5);

        // because for some reason it displays midnight as 24:00, who does that??
        if (cityTime === '24:00') {
            cityTime = '00:00';
        }
        return cityTime;
    }

    function getDate(elem) {
        const d = new Date();
        const localTime = elem.dt * 1000;
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;

        const utcWOffset = utc + (weather.timezone_offset * 1000);
        const date = new Date(utcWOffset)
            .toString()
            .slice(4, 11);

        return date;
    }

    // CURRENT WEATHER
    domFunc.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.weather[0].icon, weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

    // HOURLY WEATHER
    weather.hourly
        // get the first 24 hours
        .splice(0, 25)
        // get every 3rd hour
        .filter(function (value, index, arr) {
            return index % 3 === 0;
        })
        .map(function (elem) {
            // create section to display hourly weather data
            domFunc.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), elem.temp, elem.weather[0].icon, elem.pop);
        });

    // DAILY WEATHER   
    weather.daily.map(function (elem) {
        domFunc.displayDailyWeather(document.querySelector('.daily-weather'), getDate(elem), elem.temp.max, elem.temp.min, elem.weather[0].icon);
    });
    // don't display daily weather section by default, only when user clicks the "7 days" button
    document.querySelector('.daily-weather').style.display = 'none';
}

displayWeather();

// SEARCH FOR CITY  
searchBtn.addEventListener('click', () => {
    // reassign input
    const searchQuery = document.querySelector('.search-bar > input').value;
    city = searchQuery;

    // clear weather sections
    domFunc.removeChildren(document.querySelector('.curr-weather'));
    domFunc.removeChildren(document.querySelector('.hourly-weather'));
    domFunc.removeChildren(document.querySelector('.daily-weather'));

    displayCityDate(document.querySelector('.city-time'));
    displayWeather();
    // clear input
    document.querySelector('.search-bar > input').value = '';
});

// switch between the daily and hourly forecast
const dailyButton = document.querySelector('.switch-view').children[1];
const hourlyButton = document.querySelector('.switch-view').children[0];

dailyButton.addEventListener('click', () => {
    document.querySelector('.hourly-weather').style.display = 'none';
    document.querySelector('.daily-weather').style.display = 'block';
});

hourlyButton.addEventListener('click', () => {
    document.querySelector('.daily-weather').style.display = 'none';
    document.querySelector('.hourly-weather').style.display = 'block';
});
