/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/api-functions.js":
/*!*********************************!*\
  !*** ./src/js/api-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEY": () => (/* binding */ KEY),
/* harmony export */   "geocode": () => (/* binding */ geocode),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const KEY = '921d13d1f0511dece8b22ba91fc75172';

// get latitude and longitude by location name
async function geocode(url, city) {

            const response = await fetch (url, {mode: 'cors'});
    
            // since fetch doesn't throw an error for https errors I wrote a conditional to catch 4xx and 5xx responses
            if (response.ok) {
                const data = await response.json();
                const lat = data[0].lat;
                const lon = data[0].lon;
                return {lat, lon};
    
            } else {
                throw new Error (`oops. ${response.status}`);
            }
    

}

// get current, hourly, and daily weather data using geo coordinates
async function getWeatherData(url) {
    const response = await fetch (url, {mode: 'cors'});

    const weatherData = await response.json();
    return weatherData;
}


/***/ }),

/***/ "./src/js/dom-functions.js":
/*!*********************************!*\
  !*** ./src/js/dom-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCurrWeather": () => (/* binding */ displayCurrWeather),
/* harmony export */   "displayDailyWeather": () => (/* binding */ displayDailyWeather),
/* harmony export */   "displayHourlyWeather": () => (/* binding */ displayHourlyWeather),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren),
/* harmony export */   "setCityDate": () => (/* binding */ setCityDate)
/* harmony export */ });
function displayCurrWeather(container, icon, temp, currCondition, feelsLike, wind, humidity) {

    // i divided the section into two divs so it would be easier to style
    const topDiv = container.appendChild(document.createElement('div'));
    topDiv.classList.add('top-div');

    // weather icon
    const iconImg = topDiv.appendChild(document.createElement('img'));
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    // temperature in C
    const tempP = topDiv.appendChild(document.createElement('p'));
    tempP.textContent = `${Math.round(temp)} ${'\u00B0'}C`;

    // current condition, like rain, or drizzle
    const currConditionP = topDiv.appendChild(document.createElement('p'));

    // first letter of every word to uppercase
    currCondition = currCondition
    .split(' ')
    .map(word => {
        const firstLetter = word.toUpperCase().substr(0,1);
        // the rest of the str is lowercase
        const strLoweCase = word.toLowerCase().slice(1);
        word = `${firstLetter}${strLoweCase}`;
        return word;
    })
    .join(' ');

    currConditionP.textContent = currCondition;

    // human perception of weather in C
    const feelsLikeP = topDiv.appendChild(document.createElement('p'));
    feelsLikeP.textContent = `Feels like ${Math.round(feelsLike)} ${'\u00B0'}C`;

    const bottomDiv = container.appendChild(document.createElement('div'));
    bottomDiv.classList.add('bottom-div');

    // wind speed in metre/sec
    // split the text into 2 p elements so it would look better
    //const windP = bottomDiv.appendChild(document.createElement('p'));
    //windP.textContent = `Wind speed`;
    const windP = bottomDiv.appendChild(document.createElement('p'));
    windP.textContent = `Wind speed: ${wind} m/s`;
    // humidity, %
    // again, two p elements
    //const humidityP = bottomDiv.appendChild(document.createElement('p'));
    //humidityP.textContent = `Humidity`;
    const humidityP = bottomDiv.appendChild(document.createElement('p'));
    humidityP.textContent = `Humidity: ${humidity}%`;
}

function displayHourlyWeather(container, time, temp, icon, pop) {
    // container div
    const div = container.appendChild(document.createElement('div'));

    // time, e.g. 13:00
    const timeP = div.appendChild(document.createElement('p'));
    timeP.textContent = time;

    // temperature in C
    const tempP = div.appendChild(document.createElement('p'));
    tempP.textContent = `${Math.round(temp)} ${'\u00B0'}C`;

    // weather icon
    const iconImg = div.appendChild(document.createElement('img'));
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    //chance of rain
    const popP = div.appendChild(document.createElement('p'));
    popP.textContent = `Chance of rain: ${Math.round(pop * 100)}%`;
}

function displayDailyWeather(container, date, maxTemp, minTemp, icon) {
    // container div 
    const div = container.appendChild(document.createElement('div'));

    // date
    const dateP = div.appendChild(document.createElement('p'));
    dateP.textContent = date;

    // max temperature in C
    const maxTempP = div.appendChild(document.createElement('p'));
    maxTempP.textContent = `${Math.round(maxTemp)} ${'\u00B0'}C`;

    // min temperature in C
    const minTempP = div.appendChild(document.createElement('p'));
    minTempP.textContent = `${Math.round(minTemp)} ${'\u00B0'}C`;

    // weather icon
    const iconImg = div.appendChild(document.createElement('img'));
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
}

function setCityDate(offset, city, container) {
    function setCity(city) {
        const cityP = container.appendChild(document.createElement('p'));

        // ' KYIV ' => 'Kyiv' 
        // remove spaces
        city = city.replace(/\s/g, '');
        // start str with uppercase letter
        const firstLetter = city.toUpperCase().substr(0,1);
        // the rest of the str is lowercase
        const strLoweCase = city.toLowerCase().slice(1);

        cityP.textContent = `${firstLetter}${strLoweCase}`;
    }
    function setDate(offset) {

        const date = new Date(new Date().getTime() + offset * 1000 
        )
            .toUTCString()
            .slice(0, -12);

        const dateP = container.appendChild(document.createElement('p'));
        dateP.textContent = date;
        dateP.classList.add('date');
    }
    setCity(city);
    setDate(offset);
}

function removeChildren(parent) {
    let child = parent.lastElementChild;

    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-functions */ "./src/js/api-functions.js");
/* harmony import */ var _dom_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-functions */ "./src/js/dom-functions.js");




let city = 'kyiv';
const searchBtn = document.querySelector('.search-bar > button');
let weather;

async function getWeatherData() {
    try {
        const geocode = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}`, city);

        // get all weather data for selected city
        weather = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}&units=metric`);
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
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(container);
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.setCityDate(data.timezone_offset, city, container);
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
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.weather[0].icon, weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

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
            _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), elem.temp, elem.weather[0].icon, elem.pop);
        });

    // DAILY WEATHER   
    weather.daily.map(function (elem) {
        _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayDailyWeather(document.querySelector('.daily-weather'), getDate(elem), elem.temp.max, elem.temp.min, elem.weather[0].icon);
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
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(document.querySelector('.curr-weather'));
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(document.querySelector('.hourly-weather'));
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(document.querySelector('.daily-weather'));

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
    document.querySelector('.daily-weather').style.display = 'grid';
});

hourlyButton.addEventListener('click', () => {
    document.querySelector('.daily-weather').style.display = 'none';
    document.querySelector('.hourly-weather').style.display = 'grid';
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZLGdFQUE0QjtBQUN4QyxTQUFTOztBQUVUO0FBQ0E7QUFDQSxRQUFRLCtEQUEyQjtBQUNuQyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFzQjtBQUMxQixJQUFJLDBEQUFzQjtBQUMxQixJQUFJLDBEQUFzQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9hcGktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL2RvbS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgS0VZID0gJzkyMWQxM2QxZjA1MTFkZWNlOGIyMmJhOTFmYzc1MTcyJztcblxuLy8gZ2V0IGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgYnkgbG9jYXRpb24gbmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlb2NvZGUodXJsLCBjaXR5KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuICAgIFxuICAgICAgICAgICAgLy8gc2luY2UgZmV0Y2ggZG9lc24ndCB0aHJvdyBhbiBlcnJvciBmb3IgaHR0cHMgZXJyb3JzIEkgd3JvdGUgYSBjb25kaXRpb25hbCB0byBjYXRjaCA0eHggYW5kIDV4eCByZXNwb25zZXNcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gZGF0YVswXS5sYXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9uID0gZGF0YVswXS5sb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtsYXQsIGxvbn07XG4gICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoYG9vcHMuICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgIFxuXG59XG5cbi8vIGdldCBjdXJyZW50LCBob3VybHksIGFuZCBkYWlseSB3ZWF0aGVyIGRhdGEgdXNpbmcgZ2VvIGNvb3JkaW5hdGVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJXZWF0aGVyKGNvbnRhaW5lciwgaWNvbiwgdGVtcCwgY3VyckNvbmRpdGlvbiwgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSkge1xuXG4gICAgLy8gaSBkaXZpZGVkIHRoZSBzZWN0aW9uIGludG8gdHdvIGRpdnMgc28gaXQgd291bGQgYmUgZWFzaWVyIHRvIHN0eWxlXG4gICAgY29uc3QgdG9wRGl2ID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgndG9wLWRpdicpO1xuXG4gICAgLy8gd2VhdGhlciBpY29uXG4gICAgY29uc3QgaWNvbkltZyA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSk7XG4gICAgaWNvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xuXG4gICAgLy8gdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IHRlbXBQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgdGVtcFAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKHRlbXApfSAkeydcXHUwMEIwJ31DYDtcblxuICAgIC8vIGN1cnJlbnQgY29uZGl0aW9uLCBsaWtlIHJhaW4sIG9yIGRyaXp6bGVcbiAgICBjb25zdCBjdXJyQ29uZGl0aW9uUCA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuXG4gICAgLy8gZmlyc3QgbGV0dGVyIG9mIGV2ZXJ5IHdvcmQgdG8gdXBwZXJjYXNlXG4gICAgY3VyckNvbmRpdGlvbiA9IGN1cnJDb25kaXRpb25cbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAod29yZCA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gd29yZC50b1VwcGVyQ2FzZSgpLnN1YnN0cigwLDEpO1xuICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3RyIGlzIGxvd2VyY2FzZVxuICAgICAgICBjb25zdCBzdHJMb3dlQ2FzZSA9IHdvcmQudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcbiAgICAgICAgd29yZCA9IGAke2ZpcnN0TGV0dGVyfSR7c3RyTG93ZUNhc2V9YDtcbiAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfSlcbiAgICAuam9pbignICcpO1xuXG4gICAgY3VyckNvbmRpdGlvblAudGV4dENvbnRlbnQgPSBjdXJyQ29uZGl0aW9uO1xuXG4gICAgLy8gaHVtYW4gcGVyY2VwdGlvbiBvZiB3ZWF0aGVyIGluIENcbiAgICBjb25zdCBmZWVsc0xpa2VQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZmVlbHNMaWtlUC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7TWF0aC5yb3VuZChmZWVsc0xpa2UpfSAkeydcXHUwMEIwJ31DYDtcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1kaXYnKTtcblxuICAgIC8vIHdpbmQgc3BlZWQgaW4gbWV0cmUvc2VjXG4gICAgLy8gc3BsaXQgdGhlIHRleHQgaW50byAyIHAgZWxlbWVudHMgc28gaXQgd291bGQgbG9vayBiZXR0ZXJcbiAgICAvL2NvbnN0IHdpbmRQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgLy93aW5kUC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkYDtcbiAgICBjb25zdCB3aW5kUCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWQ6ICR7d2luZH0gbS9zYDtcbiAgICAvLyBodW1pZGl0eSwgJVxuICAgIC8vIGFnYWluLCB0d28gcCBlbGVtZW50c1xuICAgIC8vY29uc3QgaHVtaWRpdHlQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgLy9odW1pZGl0eVAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHlgO1xuICAgIGNvbnN0IGh1bWlkaXR5UCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGh1bWlkaXR5UC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtodW1pZGl0eX0lYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb3VybHlXZWF0aGVyKGNvbnRhaW5lciwgdGltZSwgdGVtcCwgaWNvbiwgcG9wKSB7XG4gICAgLy8gY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cbiAgICAvLyB0aW1lLCBlLmcuIDEzOjAwXG4gICAgY29uc3QgdGltZVAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0aW1lUC50ZXh0Q29udGVudCA9IHRpbWU7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQodGVtcCl9ICR7J1xcdTAwQjAnfUNgO1xuXG4gICAgLy8gd2VhdGhlciBpY29uXG4gICAgY29uc3QgaWNvbkltZyA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSk7XG4gICAgaWNvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xuXG4gICAgLy9jaGFuY2Ugb2YgcmFpblxuICAgIGNvbnN0IHBvcFAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBwb3BQLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiByYWluOiAke01hdGgucm91bmQocG9wICogMTAwKX0lYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseVdlYXRoZXIoY29udGFpbmVyLCBkYXRlLCBtYXhUZW1wLCBtaW5UZW1wLCBpY29uKSB7XG4gICAgLy8gY29udGFpbmVyIGRpdiBcbiAgICBjb25zdCBkaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXG4gICAgLy8gZGF0ZVxuICAgIGNvbnN0IGRhdGVQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgLy8gbWF4IHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCBtYXhUZW1wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIG1heFRlbXBQLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChtYXhUZW1wKX0gJHsnXFx1MDBCMCd9Q2A7XG5cbiAgICAvLyBtaW4gdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IG1pblRlbXBQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgbWluVGVtcFAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKG1pblRlbXApfSAkeydcXHUwMEIwJ31DYDtcblxuICAgIC8vIHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGljb25JbWcgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpO1xuICAgIGljb25JbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1AMngucG5nYDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENpdHlEYXRlKG9mZnNldCwgY2l0eSwgY29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gc2V0Q2l0eShjaXR5KSB7XG4gICAgICAgIGNvbnN0IGNpdHlQID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAgICAgLy8gJyBLWUlWICcgPT4gJ0t5aXYnIFxuICAgICAgICAvLyByZW1vdmUgc3BhY2VzXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHN0YXJ0IHN0ciB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBjaXR5LnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gY2l0eS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuXG4gICAgICAgIGNpdHlQLnRleHRDb250ZW50ID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREYXRlKG9mZnNldCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIG9mZnNldCAqIDEwMDAgXG4gICAgICAgIClcbiAgICAgICAgICAgIC50b1VUQ1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICB9XG4gICAgc2V0Q2l0eShjaXR5KTtcbiAgICBzZXREYXRlKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgd2VhdGhlckFwaSBmcm9tICcuL2FwaS1mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgZG9tRnVuYyBmcm9tICcuL2RvbS1mdW5jdGlvbnMnO1xuXG5sZXQgY2l0eSA9ICdreWl2JztcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gYnV0dG9uJyk7XG5sZXQgd2VhdGhlcjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2VvY29kZShgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmFwcGlkPSR7d2VhdGhlckFwaS5LRVl9YCwgY2l0eSk7XG5cbiAgICAgICAgLy8gZ2V0IGFsbCB3ZWF0aGVyIGRhdGEgZm9yIHNlbGVjdGVkIGNpdHlcbiAgICAgICAgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2dlb2NvZGUubGF0fSZsb249JHtnZW9jb2RlLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX0mdW5pdHM9bWV0cmljYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHNvIHRoZSBtaXNzcGVsbGVkIGxvY2F0aW9uIG5hbWUgaXNuJ3QgZGlzcGxheWVkXG4gICAgICAgIGNpdHkgPSAna3lpdic7XG5cbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAgICAgIGNvbnN0IGVyck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpbWUnKS5wcmVwZW5kKGVyck1lc3NhZ2UpO1xuICAgICAgICBlcnJNZXNzYWdlLnRleHRDb250ZW50ID0gJ05vIHJlc3VsdHMnO1xuICAgIH1cblxuICAgIHJldHVybiB3ZWF0aGVyO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDaXR5RGF0ZShjb250YWluZXIpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICAvLyBjbGVhciB0aGUgY29udGFpbmVyIHdoZW4gYmVmb3JlIGNyZWF0aW5nIGl0XG4gICAgZG9tRnVuYy5yZW1vdmVDaGlsZHJlbihjb250YWluZXIpO1xuICAgIGRvbUZ1bmMuc2V0Q2l0eURhdGUoZGF0YS50aW1lem9uZV9vZmZzZXQsIGNpdHksIGNvbnRhaW5lcik7XG59XG5cbmRpc3BsYXlDaXR5RGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10aW1lJykpO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIGZ1bmN0aW9uIGdldFRpbWUoZWxlbSkge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbG9jYWxUaW1lID0gZWxlbS5kdCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IGxvY2FsT2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gICAgICAgIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0O1xuXG4gICAgICAgIGNvbnN0IGNpdHkgPSB1dGMgKyAod2VhdGhlci50aW1lem9uZV9vZmZzZXQgKiAxMDAwKTtcbiAgICAgICAgbGV0IGNpdHlUaW1lID0gbmV3IERhdGUoY2l0eSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zbGljZSgwLCA1KTtcblxuICAgICAgICAvLyBiZWNhdXNlIGZvciBzb21lIHJlYXNvbiBpdCBkaXNwbGF5cyBtaWRuaWdodCBhcyAyNDowMCwgd2hvIGRvZXMgdGhhdD8/XG4gICAgICAgIGlmIChjaXR5VGltZSA9PT0gJzI0OjAwJykge1xuICAgICAgICAgICAgY2l0eVRpbWUgPSAnMDA6MDAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaXR5VGltZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRlKGVsZW0pIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGVsZW0uZHQgKiAxMDAwO1xuICAgICAgICBjb25zdCBsb2NhbE9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICAgICAgICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldDtcblxuICAgICAgICBjb25zdCB1dGNXT2Zmc2V0ID0gdXRjICsgKHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0ICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1dGNXT2Zmc2V0KVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5zbGljZSg0LCAxMSk7XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLy8gQ1VSUkVOVCBXRUFUSEVSXG4gICAgZG9tRnVuYy5kaXNwbGF5Q3VycldlYXRoZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnItd2VhdGhlcicpLCB3ZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5pY29uLCB3ZWF0aGVyLmN1cnJlbnQudGVtcCwgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIHdlYXRoZXIuY3VycmVudC5mZWVsc19saWtlLCB3ZWF0aGVyLmN1cnJlbnQud2luZF9zcGVlZCwgd2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5KTtcblxuICAgIC8vIEhPVVJMWSBXRUFUSEVSXG4gICAgd2VhdGhlci5ob3VybHlcbiAgICAgICAgLy8gZ2V0IHRoZSBmaXJzdCAyNCBob3Vyc1xuICAgICAgICAuc3BsaWNlKDAsIDI1KVxuICAgICAgICAvLyBnZXQgZXZlcnkgM3JkIGhvdXJcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDMgPT09IDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzZWN0aW9uIHRvIGRpc3BsYXkgaG91cmx5IHdlYXRoZXIgZGF0YVxuICAgICAgICAgICAgZG9tRnVuYy5kaXNwbGF5SG91cmx5V2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKSwgZ2V0VGltZShlbGVtKSwgZWxlbS50ZW1wLCBlbGVtLndlYXRoZXJbMF0uaWNvbiwgZWxlbS5wb3ApO1xuICAgICAgICB9KTtcblxuICAgIC8vIERBSUxZIFdFQVRIRVIgICBcbiAgICB3ZWF0aGVyLmRhaWx5Lm1hcChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBkb21GdW5jLmRpc3BsYXlEYWlseVdlYXRoZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXdlYXRoZXInKSwgZ2V0RGF0ZShlbGVtKSwgZWxlbS50ZW1wLm1heCwgZWxlbS50ZW1wLm1pbiwgZWxlbS53ZWF0aGVyWzBdLmljb24pO1xuICAgIH0pO1xuICAgIC8vIGRvbid0IGRpc3BsYXkgZGFpbHkgd2VhdGhlciBzZWN0aW9uIGJ5IGRlZmF1bHQsIG9ubHkgd2hlbiB1c2VyIGNsaWNrcyB0aGUgXCI3IGRheXNcIiBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktd2VhdGhlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmRpc3BsYXlXZWF0aGVyKCk7XG5cbi8vIFNFQVJDSCBGT1IgQ0lUWSAgXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gcmVhc3NpZ24gaW5wdXRcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZTtcbiAgICBjaXR5ID0gc2VhcmNoUXVlcnk7XG5cbiAgICAvLyBjbGVhciB3ZWF0aGVyIHNlY3Rpb25zXG4gICAgZG9tRnVuYy5yZW1vdmVDaGlsZHJlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyci13ZWF0aGVyJykpO1xuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyJykpO1xuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LXdlYXRoZXInKSk7XG5cbiAgICBkaXNwbGF5Q2l0eURhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGltZScpKTtcbiAgICBkaXNwbGF5V2VhdGhlcigpO1xuICAgIC8vIGNsZWFyIGlucHV0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgPiBpbnB1dCcpLnZhbHVlID0gJyc7XG59KTtcblxuLy8gc3dpdGNoIGJldHdlZW4gdGhlIGRhaWx5IGFuZCBob3VybHkgZm9yZWNhc3RcbmNvbnN0IGRhaWx5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC12aWV3JykuY2hpbGRyZW5bMV07XG5jb25zdCBob3VybHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLXZpZXcnKS5jaGlsZHJlblswXTtcblxuZGFpbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS13ZWF0aGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktd2VhdGhlcicpLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG59KTtcblxuaG91cmx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=