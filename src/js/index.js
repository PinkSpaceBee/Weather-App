'use strict';
import * as weatherApi from './api-functions';
import * as domFunc from './dom-functions';

let city = 'kyiv'; 
let weather;

async function getWeatherData() {
    // get lat and lon
    const geocode = await weatherApi.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherApi.KEY}`, city);
    
    // get all weather data for selected city
    weather = await weatherApi.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${weatherApi.KEY}&units=metric`);
    
    console.log(weather);
    
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

    //create section to display current weather data
    domFunc.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.weather[0].icon, weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

    function getTime(elem) {
        const d = new Date();
        const localTime = elem.dt * 1000;
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
  
        const city = utc + (weather.timezone_offset * 1000);
        const cityTime = new Date(city).toLocaleTimeString('en-US', { hour12: false }).slice(0,5);

        // because for some reason it displays midnight as 24:00, who does that??
        if (cityTime === '24:00') {
            cityTime = '00:00';
        }
        return cityTime;
    }

    function getTemp(elem) {
        console.log(elem.temp);
        return elem.temp;
    }

    function getIcon(elem) {
        console.log(elem.weather[0].icon);
        return elem.weather[0].icon;
    }

    function getPop(elem) {
        console.log(elem.pop);
        return elem.pop;
    }

    // returns every 3rd hour 
    const hourly = weather.hourly
    .splice(0, 25)
    .filter(function(value, index, arr) {
        return index % 3 === 0;
    })
    .map(function(elem) {
        domFunc.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), getTemp(elem), getIcon(elem), getPop(elem));
    });

}

displayWeather();

const searchBtn = document.querySelector('.search-bar > button');
  
    
searchBtn.addEventListener('click', () => {
    // reassign input
    city = document.querySelector('.search-bar > input');
    city = city.value;
    // clear weather section
    domFunc.removeChildren(document.querySelector('.weather-data'));
    displayWeather();
    // clear input
    document.querySelector('.search-bar > input').value = '';
});
        
