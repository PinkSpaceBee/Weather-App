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




let city = 'london';
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
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayCurrWeather(document.querySelector('.weather-data'), weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);
}

displayWeather()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ087O0FBRVA7QUFDQSw0Q0FBNEMsYUFBYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEIsVUFBVTtBQUNWLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asd0NBQXdDLGFBQWE7O0FBRXJEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixNQUFNLEVBQUUsU0FBUzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZLEVBQUUsWUFBWTtBQUM1QztBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7O0FBRXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsWUFBWSxFQUFFLFlBQVk7QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOYTtBQUNpQztBQUNIOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWtCLG1EQUFtRCxLQUFLLFNBQVMsK0NBQWMsQ0FBQztBQUM1SDtBQUNBO0FBQ0Esb0JBQW9CLDBEQUF5Qix3REFBd0QsWUFBWSxPQUFPLFlBQVksaUNBQWlDLCtDQUFjLENBQUM7QUFDcEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFzQjtBQUMxQixJQUFJLHVEQUFtQjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4REFBMEI7QUFDOUI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2FwaS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBLRVkgPSAnOTIxZDEzZDFmMDUxMWRlY2U4YjIyYmE5MWZjNzUxNzInO1xuXG4vLyBnZXQgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBieSBsb2NhdGlvbiBuYW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VvY29kZSh1cmwsIGNpdHkpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgICAgIC8vIHNpbmNlIGZldGNoIGRvZXNuJ3QgdGhyb3cgYW4gZXJyb3IgZm9yIGh0dHBzIGVycm9ycyBJIHdyb3RlIGEgY29uZGl0aW9uYWwgdG8gY2F0Y2ggNHh4IGFuZCA1eHggcmVzcG9uc2VzXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IGRhdGFbMF0ubGF0O1xuICAgICAgICAgICAgY29uc3QgbG9uID0gZGF0YVswXS5sb247XG4gICAgICAgICAgICByZXR1cm4ge2xhdCwgbG9ufTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgb29wcy4gJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuLy8gZ2V0IGN1cnJlbnQsIGhvdXJseSwgYW5kIGRhaWx5IHdlYXRoZXIgZGF0YSB1c2luZyBnZW8gY29vcmRpbmF0ZXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoICh1cmwsIHttb2RlOiAnY29ycyd9KTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycldlYXRoZXIoY29udGFpbmVyLCB0ZW1wLCBjdXJyQ29uZGl0aW9uLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpKTtcblxuICAgIC8vIGkgZGl2aWRlZCB0aGUgc2VjdGlvbiBpbnRvIHR3byBkaXZzIHNvIGl0IHdvdWxkIGJlIGVhc2llciB0byBzdHlsZVxuICAgIGNvbnN0IHRvcERpdiA9IGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgndG9wLWRpdicpO1xuXG4gICAgLy8gdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IHRlbXBQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgdGVtcFAudGV4dENvbnRlbnQgPSBgJHt0ZW1wfSAkeydcXHUwMEIwJ31DYDtcblxuICAgIC8vIGN1cnJlbnQgY29uZGl0aW9uLCBsaWtlIHJhaW4sIG9yIGRyaXp6bGVcbiAgICBjb25zdCBjdXJyQ29uZGl0aW9uUCA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuXG4gICAgLy8gZmlyc3QgbGV0dGVyIG9mIGV2ZXJ5IHdvcmQgdG8gdXBwZXJjYXNlXG4gICAgY3VyckNvbmRpdGlvbiA9IGN1cnJDb25kaXRpb25cbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAod29yZCA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gd29yZC50b1VwcGVyQ2FzZSgpLnN1YnN0cigwLDEpO1xuICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3RyIGlzIGxvd2VyY2FzZVxuICAgICAgICBjb25zdCBzdHJMb3dlQ2FzZSA9IHdvcmQudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcbiAgICAgICAgd29yZCA9IGAke2ZpcnN0TGV0dGVyfSR7c3RyTG93ZUNhc2V9YDtcbiAgICAgICAgcmV0dXJuIHdvcmQ7XG4gICAgfSlcbiAgICAuam9pbignICcpO1xuXG4gICAgY3VyckNvbmRpdGlvblAudGV4dENvbnRlbnQgPSBjdXJyQ29uZGl0aW9uO1xuXG4gICAgLy8gaHVtYW4gcGVyY2VwdGlvbiBvZiB3ZWF0aGVyIGluIENcbiAgICBjb25zdCBmZWVsc0xpa2VQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZmVlbHNMaWtlUC50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlICR7ZmVlbHNMaWtlfWA7XG5cbiAgICBjb25zdCBib3R0b21EaXYgPSBjdXJyZW50V2VhdGhlckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1kaXYnKTtcblxuICAgIC8vIHdpbmQgc3BlZWQgaW4gbWV0cmUvc2VjXG4gICAgLy8gc3BsaXQgdGhlIHRleHQgaW50byAyIHAgZWxlbWVudHMgc28gaXQgd291bGQgbG9vayBiZXR0ZXJcbiAgICBjb25zdCB3aW5kUCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGNvbnN0IHdpbmRQQm90dG9tID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgd2luZFBCb3R0b20udGV4dENvbnRlbnQgPSBgJHt3aW5kfSBtL3NgO1xuICAgIC8vIGh1bWlkaXR5LCAlXG4gICAgLy8gYWdhaW4sIHR3byBwIGVsZW1lbnRzXG4gICAgY29uc3QgaHVtaWRpdHlQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgaHVtaWRpdHlQLnRleHRDb250ZW50ID0gYEh1bWlkaXR5YDtcbiAgICBjb25zdCBodW1pZGl0eVBCb3R0b20gPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBodW1pZGl0eVBCb3R0b20udGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0lYDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaXR5RGF0ZShvZmZzZXQsIGNpdHksIGNvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIHNldENpdHkoY2l0eSkge1xuICAgICAgICBjb25zdCBjaXR5UCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuXG4gICAgICAgIC8vICcgS1lJViAnID0+ICdLeWl2JyBcbiAgICAgICAgLy8gcmVtb3ZlIHNwYWNlc1xuICAgICAgICBjaXR5ID0gY2l0eS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICAvLyBzdGFydCBzdHIgd2l0aCB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gY2l0eS50b1VwcGVyQ2FzZSgpLnN1YnN0cigwLDEpO1xuICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3RyIGlzIGxvd2VyY2FzZVxuICAgICAgICBjb25zdCBzdHJMb3dlQ2FzZSA9IGNpdHkudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcblxuICAgICAgICBjaXR5UC50ZXh0Q29udGVudCA9IGAke2ZpcnN0TGV0dGVyfSR7c3RyTG93ZUNhc2V9YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0RGF0ZShvZmZzZXQpIHtcblxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBvZmZzZXQgKiAxMDAwIFxuICAgICAgICApXG4gICAgICAgICAgICAudG9VVENTdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC0xMik7XG5cbiAgICAgICAgY29uc3QgZGF0ZVAgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBkYXRlUC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgfVxuICAgIHNldENpdHkoY2l0eSk7XG4gICAgc2V0RGF0ZShvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgbGV0IGNoaWxkID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIHdlYXRoZXJBcGkgZnJvbSAnLi9hcGktZnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGRvbUZ1bmMgZnJvbSAnLi9kb20tZnVuY3Rpb25zJztcblxubGV0IGNpdHkgPSAnbG9uZG9uJztcbmxldCB3ZWF0aGVyO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgICAvLyBnZXQgbGF0IGFuZCBsb25cbiAgICBjb25zdCBnZW9jb2RlID0gYXdhaXQgd2VhdGhlckFwaS5nZW9jb2RlKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX1gLCBjaXR5KTtcbiAgICBcbiAgICAvLyBnZXQgYWxsIHdlYXRoZXIgZGF0YSBmb3Igc2VsZWN0ZWQgY2l0eVxuICAgIHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQXBpLmdldFdlYXRoZXJEYXRhKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtnZW9jb2RlLmxhdH0mbG9uPSR7Z2VvY29kZS5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJmFwcGlkPSR7d2VhdGhlckFwaS5LRVl9JnVuaXRzPW1ldHJpY2ApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIFxuICAgIHJldHVybiB3ZWF0aGVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Q2l0eURhdGUoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG4gICAgLy8gY2xlYXIgdGhlIGNvbnRhaW5lciB3aGVuIGJlZm9yZSBjcmVhdGluZyBpdFxuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBkb21GdW5jLnNldENpdHlEYXRlKGRhdGEudGltZXpvbmVfb2Zmc2V0LCBjaXR5LCBjb250YWluZXIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIC8vY3JlYXRlIHNlY3Rpb24gdG8gZGlzcGxheSBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIGRvbUZ1bmMuZGlzcGxheUN1cnJXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSwgd2VhdGhlci5jdXJyZW50LnRlbXAsIHdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZSwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG59XG5cbmRpc3BsYXlXZWF0aGVyKClcblxuZGlzcGxheUNpdHlEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpbWUnKSk7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gYnV0dG9uJyk7XG4gIFxuICAgIFxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIHJlYXNzaWduIGlucHV0XG4gICAgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKTtcbiAgICBjaXR5ID0gY2l0eS52YWx1ZTtcbiAgICAvLyBjbGVhciB3ZWF0aGVyIHNlY3Rpb25cbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICAvLyBjbGVhciBpbnB1dFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZSA9ICcnO1xufSk7XG4gICAgICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9