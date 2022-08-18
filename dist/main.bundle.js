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
/* harmony export */   "displayHourlyWeather": () => (/* binding */ displayHourlyWeather),
/* harmony export */   "removeChildren": () => (/* binding */ removeChildren),
/* harmony export */   "setCityDate": () => (/* binding */ setCityDate)
/* harmony export */ });
function displayCurrWeather(container, temp, currCondition, feelsLike, wind, humidity) {
    const currentWeatherDiv = container.appendChild(document.createElement('section'));

    // i divided the section into two divs so it would be easier to style
    const topDiv = currentWeatherDiv.appendChild(document.createElement('div'));
    topDiv.classList.add('top-div');

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
    const div = container.appendChild(document.createElement('div'));
    // time, e.g. 13:00
    const timeP = div.appendChild(document.createElement('p'));
    timeP.textContent = time;

    // temperature in C
    const tempP = div.appendChild(document.createElement('p'));
    tempP.textContent = `${temp}${'\u00B0'}C`;

    // weather icon
    const iconImg = div.appendChild(document.createElement('p'));
    iconImg.textContent = icon;

    //chance of rain
    const popP = div.appendChild(document.createElement('p'));
    popP.textContent = pop;
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
    weather = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}&units=metric`);
    
    console.log(weather);
    
    return weather;
}

async function displayCityDate(container) {
    const data = await getWeatherData();
    // clear the container when before creating it
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(container);
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.setCityDate(data.timezone_offset, city, container);
}

async function displayWeather() {
    const weather = await getWeatherData();

    //create section to display current weather data
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

    function getTime(elem) {
        const d = new Date();
        const localTime = elem.dt * 1000;
        const localOffset = d.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
  
        const city = utc + (weather.timezone_offset * 1000);
        const cityTime = new Date(city).toLocaleTimeString('en-US', { hour12: false }).slice(0,5);

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
        //console.log(getTime(elem));
        //getTemp(elem);
        //getIcon(elem);
        //getPop(elem);
        _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), getTemp(elem), getIcon(elem), getPop(elem));
    });

    console.log(hourly);
}

displayWeather();

displayCityDate(document.querySelector('.city-time'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ087O0FBRVA7QUFDQSw0Q0FBNEMsYUFBYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEIsVUFBVTtBQUNWLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asd0NBQXdDLGFBQWE7O0FBRXJEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTSxFQUFFLFNBQVM7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxFQUFFLFlBQVk7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxVQUFVOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUssRUFBRSxTQUFTOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixZQUFZLEVBQUUsWUFBWTtBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3hHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2lDO0FBQ0g7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtREFBa0IsbURBQW1ELEtBQUssU0FBUywrQ0FBYyxDQUFDO0FBQzVIO0FBQ0E7QUFDQSxvQkFBb0IsMERBQXlCLHdEQUF3RCxZQUFZLE9BQU8sWUFBWSxpQ0FBaUMsK0NBQWMsQ0FBQztBQUNwTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXNCO0FBQzFCLElBQUksdURBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUEwQjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsZUFBZTs7QUFFckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQTRCO0FBQ3BDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvYXBpLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9qcy9kb20tZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEtFWSA9ICc5MjFkMTNkMWYwNTExZGVjZThiMjJiYTkxZmM3NTE3Mic7XG5cbi8vIGdldCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGJ5IGxvY2F0aW9uIG5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW9jb2RlKHVybCwgY2l0eSkge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICAgICAgLy8gc2luY2UgZmV0Y2ggZG9lc24ndCB0aHJvdyBhbiBlcnJvciBmb3IgaHR0cHMgZXJyb3JzIEkgd3JvdGUgYSBjb25kaXRpb25hbCB0byBjYXRjaCA0eHggYW5kIDV4eCByZXNwb25zZXNcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgbGF0ID0gZGF0YVswXS5sYXQ7XG4gICAgICAgICAgICBjb25zdCBsb24gPSBkYXRhWzBdLmxvbjtcbiAgICAgICAgICAgIHJldHVybiB7bGF0LCBsb259O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBvb3BzLiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG4vLyBnZXQgY3VycmVudCwgaG91cmx5LCBhbmQgZGFpbHkgd2VhdGhlciBkYXRhIHVzaW5nIGdlbyBjb29yZGluYXRlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyV2VhdGhlcihjb250YWluZXIsIHRlbXAsIGN1cnJDb25kaXRpb24sIGZlZWxzTGlrZSwgd2luZCwgaHVtaWRpdHkpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJykpO1xuXG4gICAgLy8gaSBkaXZpZGVkIHRoZSBzZWN0aW9uIGludG8gdHdvIGRpdnMgc28gaXQgd291bGQgYmUgZWFzaWVyIHRvIHN0eWxlXG4gICAgY29uc3QgdG9wRGl2ID0gY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0b3AtZGl2Jyk7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGAke3RlbXB9ICR7J1xcdTAwQjAnfUNgO1xuXG4gICAgLy8gY3VycmVudCBjb25kaXRpb24sIGxpa2UgcmFpbiwgb3IgZHJpenpsZVxuICAgIGNvbnN0IGN1cnJDb25kaXRpb25QID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAvLyBmaXJzdCBsZXR0ZXIgb2YgZXZlcnkgd29yZCB0byB1cHBlcmNhc2VcbiAgICBjdXJyQ29uZGl0aW9uID0gY3VyckNvbmRpdGlvblxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCh3b3JkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSB3b3JkLnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gd29yZC50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuICAgICAgICB3b3JkID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICB9KVxuICAgIC5qb2luKCcgJyk7XG5cbiAgICBjdXJyQ29uZGl0aW9uUC50ZXh0Q29udGVudCA9IGN1cnJDb25kaXRpb247XG5cbiAgICAvLyBodW1hbiBwZXJjZXB0aW9uIG9mIHdlYXRoZXIgaW4gQ1xuICAgIGNvbnN0IGZlZWxzTGlrZVAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBmZWVsc0xpa2VQLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtmZWVsc0xpa2V9YDtcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tLWRpdicpO1xuXG4gICAgLy8gd2luZCBzcGVlZCBpbiBtZXRyZS9zZWNcbiAgICAvLyBzcGxpdCB0aGUgdGV4dCBpbnRvIDIgcCBlbGVtZW50cyBzbyBpdCB3b3VsZCBsb29rIGJldHRlclxuICAgIGNvbnN0IHdpbmRQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZGA7XG4gICAgY29uc3Qgd2luZFBCb3R0b20gPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB3aW5kUEJvdHRvbS50ZXh0Q29udGVudCA9IGAke3dpbmR9IG0vc2A7XG4gICAgLy8gaHVtaWRpdHksICVcbiAgICAvLyBhZ2FpbiwgdHdvIHAgZWxlbWVudHNcbiAgICBjb25zdCBodW1pZGl0eVAgPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBodW1pZGl0eVAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHlgO1xuICAgIGNvbnN0IGh1bWlkaXR5UEJvdHRvbSA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGh1bWlkaXR5UEJvdHRvbS50ZXh0Q29udGVudCA9IGAke2h1bWlkaXR5fSVgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseVdlYXRoZXIoY29udGFpbmVyLCB0aW1lLCB0ZW1wLCBpY29uLCBwb3ApIHtcbiAgICBjb25zdCBkaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIC8vIHRpbWUsIGUuZy4gMTM6MDBcbiAgICBjb25zdCB0aW1lUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHRpbWVQLnRleHRDb250ZW50ID0gdGltZTtcblxuICAgIC8vIHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCB0ZW1wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHRlbXBQLnRleHRDb250ZW50ID0gYCR7dGVtcH0keydcXHUwMEIwJ31DYDtcblxuICAgIC8vIHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGljb25JbWcgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBpY29uSW1nLnRleHRDb250ZW50ID0gaWNvbjtcblxuICAgIC8vY2hhbmNlIG9mIHJhaW5cbiAgICBjb25zdCBwb3BQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgcG9wUC50ZXh0Q29udGVudCA9IHBvcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENpdHlEYXRlKG9mZnNldCwgY2l0eSwgY29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gc2V0Q2l0eShjaXR5KSB7XG4gICAgICAgIGNvbnN0IGNpdHlQID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAgICAgLy8gJyBLWUlWICcgPT4gJ0t5aXYnIFxuICAgICAgICAvLyByZW1vdmUgc3BhY2VzXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHN0YXJ0IHN0ciB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBjaXR5LnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gY2l0eS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuXG4gICAgICAgIGNpdHlQLnRleHRDb250ZW50ID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREYXRlKG9mZnNldCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIG9mZnNldCAqIDEwMDAgXG4gICAgICAgIClcbiAgICAgICAgICAgIC50b1VUQ1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICB9XG4gICAgc2V0Q2l0eShjaXR5KTtcbiAgICBzZXREYXRlKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgd2VhdGhlckFwaSBmcm9tICcuL2FwaS1mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgZG9tRnVuYyBmcm9tICcuL2RvbS1mdW5jdGlvbnMnO1xuXG5sZXQgY2l0eSA9ICdreWl2JzsgXG5sZXQgd2VhdGhlcjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgLy8gZ2V0IGxhdCBhbmQgbG9uXG4gICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2VvY29kZShgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmFwcGlkPSR7d2VhdGhlckFwaS5LRVl9YCwgY2l0eSk7XG4gICAgXG4gICAgLy8gZ2V0IGFsbCB3ZWF0aGVyIGRhdGEgZm9yIHNlbGVjdGVkIGNpdHlcbiAgICB3ZWF0aGVyID0gYXdhaXQgd2VhdGhlckFwaS5nZXRXZWF0aGVyRGF0YShgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Z2VvY29kZS5sYXR9Jmxvbj0ke2dlb2NvZGUubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZhcHBpZD0ke3dlYXRoZXJBcGkuS0VZfSZ1bml0cz1tZXRyaWNgKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICBcbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUNpdHlEYXRlKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIC8vIGNsZWFyIHRoZSBjb250YWluZXIgd2hlbiBiZWZvcmUgY3JlYXRpbmcgaXRcbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGNvbnRhaW5lcik7XG4gICAgZG9tRnVuYy5zZXRDaXR5RGF0ZShkYXRhLnRpbWV6b25lX29mZnNldCwgY2l0eSwgY29udGFpbmVyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoKSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG5cbiAgICAvL2NyZWF0ZSBzZWN0aW9uIHRvIGRpc3BsYXkgY3VycmVudCB3ZWF0aGVyIGRhdGFcbiAgICBkb21GdW5jLmRpc3BsYXlDdXJyV2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3Vyci13ZWF0aGVyJyksIHdlYXRoZXIuY3VycmVudC50ZW1wLCB3ZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbiwgd2VhdGhlci5jdXJyZW50LmZlZWxzX2xpa2UsIHdlYXRoZXIuY3VycmVudC53aW5kX3NwZWVkLCB3ZWF0aGVyLmN1cnJlbnQuaHVtaWRpdHkpO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGltZShlbGVtKSB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBsb2NhbFRpbWUgPSBlbGVtLmR0ICogMTAwMDtcbiAgICAgICAgY29uc3QgbG9jYWxPZmZzZXQgPSBkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgICAgICAgY29uc3QgdXRjID0gbG9jYWxUaW1lICsgbG9jYWxPZmZzZXQ7XG4gIFxuICAgICAgICBjb25zdCBjaXR5ID0gdXRjICsgKHdlYXRoZXIudGltZXpvbmVfb2Zmc2V0ICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGNpdHlUaW1lID0gbmV3IERhdGUoY2l0eSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zbGljZSgwLDUpO1xuXG4gICAgICAgIHJldHVybiBjaXR5VGltZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUZW1wKGVsZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS50ZW1wKTtcbiAgICAgICAgcmV0dXJuIGVsZW0udGVtcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJY29uKGVsZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS53ZWF0aGVyWzBdLmljb24pO1xuICAgICAgICByZXR1cm4gZWxlbS53ZWF0aGVyWzBdLmljb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9wKGVsZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS5wb3ApO1xuICAgICAgICByZXR1cm4gZWxlbS5wb3A7XG4gICAgfVxuXG4gICAgXG4gICAgLy8gcmV0dXJucyBldmVyeSAzcmQgaG91ciBcbiAgICBjb25zdCBob3VybHkgPSB3ZWF0aGVyLmhvdXJseVxuICAgIC5zcGxpY2UoMCwgMjUpXG4gICAgLmZpbHRlcihmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGFycikge1xuICAgICAgICByZXR1cm4gaW5kZXggJSAzID09PSAwO1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZ2V0VGltZShlbGVtKSk7XG4gICAgICAgIC8vZ2V0VGVtcChlbGVtKTtcbiAgICAgICAgLy9nZXRJY29uKGVsZW0pO1xuICAgICAgICAvL2dldFBvcChlbGVtKTtcbiAgICAgICAgZG9tRnVuYy5kaXNwbGF5SG91cmx5V2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKSwgZ2V0VGltZShlbGVtKSwgZ2V0VGVtcChlbGVtKSwgZ2V0SWNvbihlbGVtKSwgZ2V0UG9wKGVsZW0pKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGhvdXJseSk7XG59XG5cbmRpc3BsYXlXZWF0aGVyKCk7XG5cbmRpc3BsYXlDaXR5RGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10aW1lJykpO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciA+IGJ1dHRvbicpO1xuICBcbiAgICBcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyByZWFzc2lnbiBpbnB1dFxuICAgIGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciA+IGlucHV0Jyk7XG4gICAgY2l0eSA9IGNpdHkudmFsdWU7XG4gICAgLy8gY2xlYXIgd2VhdGhlciBzZWN0aW9uXG4gICAgZG9tRnVuYy5yZW1vdmVDaGlsZHJlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kYXRhJykpO1xuICAgIGRpc3BsYXlXZWF0aGVyKCk7XG4gICAgLy8gY2xlYXIgaW5wdXRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJhciA+IGlucHV0JykudmFsdWUgPSAnJztcbn0pO1xuICAgICAgICBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==