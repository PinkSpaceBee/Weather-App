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

    try {
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

    } catch (error) {
        console.log(error)
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
    const currentWeatherDiv = container.appendChild(document.createElement('section'));

    // i divided the section into two divs so it would be easier to style
    const topDiv = currentWeatherDiv.appendChild(document.createElement('div'));
    topDiv.classList.add('top-div');

    // weather icon
    const iconImg = topDiv.appendChild(document.createElement('img'));
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    // temperature in C
    const tempP = topDiv.appendChild(document.createElement('p'));
    tempP.textContent = `${temp} ${'\u00B0'}C`;

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
    feelsLikeP.textContent = `Feels like ${feelsLike}`;

    const bottomDiv = currentWeatherDiv.appendChild(document.createElement('div'));
    bottomDiv.classList.add('bottom-div');

    // wind speed in metre/sec
    // split the text into 2 p elements so it would look better
    const windP = bottomDiv.appendChild(document.createElement('p'));
    windP.textContent = `Wind speed`;
    const windPBottom = bottomDiv.appendChild(document.createElement('p'));
    windPBottom.textContent = `${wind} m/s`;
    // humidity, %
    // again, two p elements
    const humidityP = bottomDiv.appendChild(document.createElement('p'));
    humidityP.textContent = `Humidity`;
    const humidityPBottom = bottomDiv.appendChild(document.createElement('p'));
    humidityPBottom.textContent = `${humidity}%`;
}

function displayHourlyWeather(container, time, temp, icon, pop) {
    // container div
    const div = container.appendChild(document.createElement('div'));

    // time, e.g. 13:00
    const timeP = div.appendChild(document.createElement('p'));
    timeP.textContent = time;

    // temperature in C
    const tempP = div.appendChild(document.createElement('p'));
    tempP.textContent = `${temp} ${'\u00B0'}C`;

    // weather icon
    const iconImg = div.appendChild(document.createElement('img'));
    iconImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    //chance of rain
    const popP = div.appendChild(document.createElement('p'));
    popP.textContent = `Chance of precipitation: ${pop}`;
}

function displayDailyWeather(container, date, maxTemp, minTemp, icon) {
    // container div 
    const div = container.appendChild(document.createElement('div'));

    // date
    const dateP = div.appendChild(document.createElement('p'));
    dateP.textContent = date;

    // max temperature in C
    const maxTempP = div.appendChild(document.createElement('p'));
    maxTempP.textContent = maxTemp;

    // min temperature in C
    const minTempP = div.appendChild(document.createElement('p'));
    minTempP.textContent = minTemp;

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
let weather;

async function getWeatherData() {
    // get lat and lon
    const geocode = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}`, city);
    
    // get all weather data for selected city
    weather = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}&units=metric`)
    
    console.log(weather);
    
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
        const cityTime = new Date(city).toLocaleTimeString('en-US', { hour12: false }).slice(0,5);

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
        const date = new Date(utcWOffset).toLocaleString().slice(0,4);

        return date;
    }

    // CURRENT WEATHER
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.weather[0].icon, weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

    // HOURLY WEATHER
    function displayHourly() {
    
        weather.hourly
        // get the first 24 hours
        .splice(0, 25)
        // get every 3rd hour
        .filter(function(value, index, arr) {
            return index % 3 === 0;
        })
        .map(function (elem) {
            // create section to display hourly weather data
            _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), elem.temp, elem.weather[0].icon, elem.pop);
        });
    }

    displayHourly();

    // DAILY WEATHER   
    weather.daily.map(function (elem) {
        _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayDailyWeather(document.querySelector('.daily-weather'), getDate(elem), elem.temp.max, elem.temp.min, elem.weather[0].icon);
    });
}

displayWeather();

const searchBtn = document.querySelector('.search-bar > button');
  
    
searchBtn.addEventListener('click', () => {
    // reassign input
    city = document.querySelector('.search-bar > input');
    city = city.value;
    // clear weather section
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(document.querySelector('.weather-data'));
    displayWeather();
    // clear input
    document.querySelector('.search-bar > input').value = '';
});
        

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0EsUUFBUSwrREFBMkI7QUFDbkMsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9qcy9hcGktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2RvbS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgS0VZID0gJzkyMWQxM2QxZjA1MTFkZWNlOGIyMmJhOTFmYzc1MTcyJztcblxuLy8gZ2V0IGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgYnkgbG9jYXRpb24gbmFtZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlb2NvZGUodXJsLCBjaXR5KSB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoICh1cmwsIHttb2RlOiAnY29ycyd9KTtcblxuICAgICAgICAvLyBzaW5jZSBmZXRjaCBkb2Vzbid0IHRocm93IGFuIGVycm9yIGZvciBodHRwcyBlcnJvcnMgSSB3cm90ZSBhIGNvbmRpdGlvbmFsIHRvIGNhdGNoIDR4eCBhbmQgNXh4IHJlc3BvbnNlc1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBsYXQgPSBkYXRhWzBdLmxhdDtcbiAgICAgICAgICAgIGNvbnN0IGxvbiA9IGRhdGFbMF0ubG9uO1xuICAgICAgICAgICAgcmV0dXJuIHtsYXQsIGxvbn07XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoYG9vcHMuICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbi8vIGdldCBjdXJyZW50LCBob3VybHksIGFuZCBkYWlseSB3ZWF0aGVyIGRhdGEgdXNpbmcgZ2VvIGNvb3JkaW5hdGVzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEodXJsKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUN1cnJXZWF0aGVyKGNvbnRhaW5lciwgaWNvbiwgdGVtcCwgY3VyckNvbmRpdGlvbiwgZmVlbHNMaWtlLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGl2ID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKSk7XG5cbiAgICAvLyBpIGRpdmlkZWQgdGhlIHNlY3Rpb24gaW50byB0d28gZGl2cyBzbyBpdCB3b3VsZCBiZSBlYXNpZXIgdG8gc3R5bGVcbiAgICBjb25zdCB0b3BEaXYgPSBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgdG9wRGl2LmNsYXNzTGlzdC5hZGQoJ3RvcC1kaXYnKTtcblxuICAgIC8vIHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGljb25JbWcgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpO1xuICAgIGljb25JbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1AMngucG5nYDtcblxuICAgIC8vIHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCB0ZW1wUCA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHRlbXBQLnRleHRDb250ZW50ID0gYCR7dGVtcH0gJHsnXFx1MDBCMCd9Q2A7XG5cbiAgICAvLyBjdXJyZW50IGNvbmRpdGlvbiwgbGlrZSByYWluLCBvciBkcml6emxlXG4gICAgY29uc3QgY3VyckNvbmRpdGlvblAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcblxuICAgIC8vIGZpcnN0IGxldHRlciBvZiBldmVyeSB3b3JkIHRvIHVwcGVyY2FzZVxuICAgIGN1cnJDb25kaXRpb24gPSBjdXJyQ29uZGl0aW9uXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKHdvcmQgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdExldHRlciA9IHdvcmQudG9VcHBlckNhc2UoKS5zdWJzdHIoMCwxKTtcbiAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIHN0ciBpcyBsb3dlcmNhc2VcbiAgICAgICAgY29uc3Qgc3RyTG93ZUNhc2UgPSB3b3JkLnRvTG93ZXJDYXNlKCkuc2xpY2UoMSk7XG4gICAgICAgIHdvcmQgPSBgJHtmaXJzdExldHRlcn0ke3N0ckxvd2VDYXNlfWA7XG4gICAgICAgIHJldHVybiB3b3JkO1xuICAgIH0pXG4gICAgLmpvaW4oJyAnKTtcblxuICAgIGN1cnJDb25kaXRpb25QLnRleHRDb250ZW50ID0gY3VyckNvbmRpdGlvbjtcblxuICAgIC8vIGh1bWFuIHBlcmNlcHRpb24gb2Ygd2VhdGhlciBpbiBDXG4gICAgY29uc3QgZmVlbHNMaWtlUCA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGZlZWxzTGlrZVAudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2ZlZWxzTGlrZX1gO1xuXG4gICAgY29uc3QgYm90dG9tRGl2ID0gY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20tZGl2Jyk7XG5cbiAgICAvLyB3aW5kIHNwZWVkIGluIG1ldHJlL3NlY1xuICAgIC8vIHNwbGl0IHRoZSB0ZXh0IGludG8gMiBwIGVsZW1lbnRzIHNvIGl0IHdvdWxkIGxvb2sgYmV0dGVyXG4gICAgY29uc3Qgd2luZFAgPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB3aW5kUC50ZXh0Q29udGVudCA9IGBXaW5kIHNwZWVkYDtcbiAgICBjb25zdCB3aW5kUEJvdHRvbSA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHdpbmRQQm90dG9tLnRleHRDb250ZW50ID0gYCR7d2luZH0gbS9zYDtcbiAgICAvLyBodW1pZGl0eSwgJVxuICAgIC8vIGFnYWluLCB0d28gcCBlbGVtZW50c1xuICAgIGNvbnN0IGh1bWlkaXR5UCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGh1bWlkaXR5UC50ZXh0Q29udGVudCA9IGBIdW1pZGl0eWA7XG4gICAgY29uc3QgaHVtaWRpdHlQQm90dG9tID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgaHVtaWRpdHlQQm90dG9tLnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHl9JWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SG91cmx5V2VhdGhlcihjb250YWluZXIsIHRpbWUsIHRlbXAsIGljb24sIHBvcCkge1xuICAgIC8vIGNvbnRhaW5lciBkaXZcbiAgICBjb25zdCBkaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXG4gICAgLy8gdGltZSwgZS5nLiAxMzowMFxuICAgIGNvbnN0IHRpbWVQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgdGltZVAudGV4dENvbnRlbnQgPSB0aW1lO1xuXG4gICAgLy8gdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IHRlbXBQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgdGVtcFAudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSAkeydcXHUwMEIwJ31DYDtcblxuICAgIC8vIHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGljb25JbWcgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpO1xuICAgIGljb25JbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1AMngucG5nYDtcblxuICAgIC8vY2hhbmNlIG9mIHJhaW5cbiAgICBjb25zdCBwb3BQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgcG9wUC50ZXh0Q29udGVudCA9IGBDaGFuY2Ugb2YgcHJlY2lwaXRhdGlvbjogJHtwb3B9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlEYWlseVdlYXRoZXIoY29udGFpbmVyLCBkYXRlLCBtYXhUZW1wLCBtaW5UZW1wLCBpY29uKSB7XG4gICAgLy8gY29udGFpbmVyIGRpdiBcbiAgICBjb25zdCBkaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXG4gICAgLy8gZGF0ZVxuICAgIGNvbnN0IGRhdGVQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgLy8gbWF4IHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCBtYXhUZW1wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIG1heFRlbXBQLnRleHRDb250ZW50ID0gbWF4VGVtcDtcblxuICAgIC8vIG1pbiB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgbWluVGVtcFAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBtaW5UZW1wUC50ZXh0Q29udGVudCA9IG1pblRlbXA7XG5cbiAgICAvLyB3ZWF0aGVyIGljb25cbiAgICBjb25zdCBpY29uSW1nID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICBpY29uSW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaXR5RGF0ZShvZmZzZXQsIGNpdHksIGNvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIHNldENpdHkoY2l0eSkge1xuICAgICAgICBjb25zdCBjaXR5UCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuXG4gICAgICAgIC8vICcgS1lJViAnID0+ICdLeWl2JyBcbiAgICAgICAgLy8gcmVtb3ZlIHNwYWNlc1xuICAgICAgICBjaXR5ID0gY2l0eS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICAvLyBzdGFydCBzdHIgd2l0aCB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gY2l0eS50b1VwcGVyQ2FzZSgpLnN1YnN0cigwLDEpO1xuICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3RyIGlzIGxvd2VyY2FzZVxuICAgICAgICBjb25zdCBzdHJMb3dlQ2FzZSA9IGNpdHkudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcblxuICAgICAgICBjaXR5UC50ZXh0Q29udGVudCA9IGAke2ZpcnN0TGV0dGVyfSR7c3RyTG93ZUNhc2V9YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0RGF0ZShvZmZzZXQpIHtcblxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBvZmZzZXQgKiAxMDAwIFxuICAgICAgICApXG4gICAgICAgICAgICAudG9VVENTdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC0xMik7XG5cbiAgICAgICAgY29uc3QgZGF0ZVAgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBkYXRlUC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgfVxuICAgIHNldENpdHkoY2l0eSk7XG4gICAgc2V0RGF0ZShvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgbGV0IGNoaWxkID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIHdlYXRoZXJBcGkgZnJvbSAnLi9hcGktZnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGRvbUZ1bmMgZnJvbSAnLi9kb20tZnVuY3Rpb25zJztcblxubGV0IGNpdHkgPSAna3lpdic7IFxubGV0IHdlYXRoZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIC8vIGdldCBsYXQgYW5kIGxvblxuICAgIGNvbnN0IGdlb2NvZGUgPSBhd2FpdCB3ZWF0aGVyQXBpLmdlb2NvZGUoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD0ke3dlYXRoZXJBcGkuS0VZfWAsIGNpdHkpO1xuICAgIFxuICAgIC8vIGdldCBhbGwgd2VhdGhlciBkYXRhIGZvciBzZWxlY3RlZCBjaXR5XG4gICAgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2dlb2NvZGUubGF0fSZsb249JHtnZW9jb2RlLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX0mdW5pdHM9bWV0cmljYClcbiAgICBcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICBcbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUNpdHlEYXRlKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIC8vIGNsZWFyIHRoZSBjb250YWluZXIgd2hlbiBiZWZvcmUgY3JlYXRpbmcgaXRcbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGNvbnRhaW5lcik7XG4gICAgZG9tRnVuYy5zZXRDaXR5RGF0ZShkYXRhLnRpbWV6b25lX29mZnNldCwgY2l0eSwgY29udGFpbmVyKTtcbn1cblxuZGlzcGxheUNpdHlEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpbWUnKSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKCkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGltZShlbGVtKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBsb2NhbFRpbWUgPSBlbGVtLmR0ICogMTAwMDtcbiAgICAgICAgY29uc3QgbG9jYWxPZmZzZXQgPSBkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICAgICAgY29uc3QgdXRjID0gbG9jYWxUaW1lICsgbG9jYWxPZmZzZXQ7XG4gIFxuICAgICAgICBjb25zdCBjaXR5ID0gdXRjICsgKHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0ICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGNpdHlUaW1lID0gbmV3IERhdGUoY2l0eSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zbGljZSgwLDUpO1xuXG4gICAgICAgIC8vIGJlY2F1c2UgZm9yIHNvbWUgcmVhc29uIGl0IGRpc3BsYXlzIG1pZG5pZ2h0IGFzIDI0OjAwLCB3aG8gZG9lcyB0aGF0Pz9cbiAgICAgICAgaWYgKGNpdHlUaW1lID09PSAnMjQ6MDAnKSB7XG4gICAgICAgICAgICBjaXR5VGltZSA9ICcwMDowMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNpdHlUaW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGUoZWxlbSkge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbG9jYWxUaW1lID0gZWxlbS5kdCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IGxvY2FsT2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gICAgICAgIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0O1xuICBcbiAgICAgICAgY29uc3QgdXRjV09mZnNldCA9IHV0YyArICh3ZWF0aGVyLnRpbWV6b25lX29mZnNldCAqIDEwMDApO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodXRjV09mZnNldCkudG9Mb2NhbGVTdHJpbmcoKS5zbGljZSgwLDQpO1xuXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIC8vIENVUlJFTlQgV0VBVEhFUlxuICAgIGRvbUZ1bmMuZGlzcGxheUN1cnJXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLXdlYXRoZXInKSwgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uaWNvbiwgd2VhdGhlci5jdXJyZW50LnRlbXAsIHdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZSwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG5cbiAgICAvLyBIT1VSTFkgV0VBVEhFUlxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIb3VybHkoKSB7XG4gICAgXG4gICAgICAgIHdlYXRoZXIuaG91cmx5XG4gICAgICAgIC8vIGdldCB0aGUgZmlyc3QgMjQgaG91cnNcbiAgICAgICAgLnNwbGljZSgwLCAyNSlcbiAgICAgICAgLy8gZ2V0IGV2ZXJ5IDNyZCBob3VyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDMgPT09IDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzZWN0aW9uIHRvIGRpc3BsYXkgaG91cmx5IHdlYXRoZXIgZGF0YVxuICAgICAgICAgICAgZG9tRnVuYy5kaXNwbGF5SG91cmx5V2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKSwgZ2V0VGltZShlbGVtKSwgZWxlbS50ZW1wLCBlbGVtLndlYXRoZXJbMF0uaWNvbiwgZWxlbS5wb3ApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwbGF5SG91cmx5KCk7XG5cbiAgICAvLyBEQUlMWSBXRUFUSEVSICAgXG4gICAgd2VhdGhlci5kYWlseS5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgZG9tRnVuYy5kaXNwbGF5RGFpbHlXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyJyksIGdldERhdGUoZWxlbSksIGVsZW0udGVtcC5tYXgsIGVsZW0udGVtcC5taW4sIGVsZW0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9KTtcbn1cblxuZGlzcGxheVdlYXRoZXIoKTtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgPiBidXR0b24nKTtcbiAgXG4gICAgXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gcmVhc3NpZ24gaW5wdXRcbiAgICBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgPiBpbnB1dCcpO1xuICAgIGNpdHkgPSBjaXR5LnZhbHVlO1xuICAgIC8vIGNsZWFyIHdlYXRoZXIgc2VjdGlvblxuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGF0YScpKTtcbiAgICBkaXNwbGF5V2VhdGhlcigpO1xuICAgIC8vIGNsZWFyIGlucHV0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgPiBpbnB1dCcpLnZhbHVlID0gJyc7XG59KTtcbiAgICAgICAgXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=