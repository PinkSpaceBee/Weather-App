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
    tempP.textContent = temp;
    // current condition, like rain, or drizzle
    const currConditionP = topDiv.appendChild(document.createElement('p'));
    currConditionP.textContent = currCondition;
    // human perception of weather
    const feelsLikeP = topDiv.appendChild(document.createElement('p'));
    feelsLikeP.textContent = feelsLike;

    const bottomDiv = currentWeatherDiv.appendChild(document.createElement('div'));
    bottomDiv.classList.add('bottom-div');

    // wind speed in metre/sec
    const windP = bottomDiv.appendChild(document.createElement('p'));
    windP.textContent = wind;
    // humidity, %
    const humidityP = bottomDiv.appendChild(document.createElement('p'));
    humidityP.textContent = humidity;
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
    //create section to display current weather data
    // domFunc.displayCurrWeather(document.querySelector('.weather-data'), weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);
    
    return weather;
}

async function displayCityDate(container) {
    const data = await getWeatherData();
    // clear the container when before creating it
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(container);
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.setCityDate(data.timezone_offset, 'kyiv', container);
}

displayCityDate(document.querySelector('.city-time'));

``
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ087O0FBRVA7QUFDQSw0Q0FBNEMsYUFBYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEIsVUFBVTtBQUNWLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asd0NBQXdDLGFBQWE7O0FBRXJEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLFlBQVksRUFBRSxZQUFZO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDL0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDaUM7QUFDSDs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFrQixtREFBbUQsS0FBSyxTQUFTLCtDQUFjLENBQUM7QUFDNUg7QUFDQTtBQUNBLG9CQUFvQiwwREFBeUIsd0RBQXdELFlBQVksT0FBTyxZQUFZLGlDQUFpQywrQ0FBYyxDQUFDO0FBQ3BMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXNCO0FBQzFCLElBQUksdURBQW1CO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2FwaS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBLRVkgPSAnOTIxZDEzZDFmMDUxMWRlY2U4YjIyYmE5MWZjNzUxNzInO1xuXG4vLyBnZXQgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBieSBsb2NhdGlvbiBuYW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VvY29kZSh1cmwsIGNpdHkpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgICAgIC8vIHNpbmNlIGZldGNoIGRvZXNuJ3QgdGhyb3cgYW4gZXJyb3IgZm9yIGh0dHBzIGVycm9ycyBJIHdyb3RlIGEgY29uZGl0aW9uYWwgdG8gY2F0Y2ggNHh4IGFuZCA1eHggcmVzcG9uc2VzXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IGRhdGFbMF0ubGF0O1xuICAgICAgICAgICAgY29uc3QgbG9uID0gZGF0YVswXS5sb247XG4gICAgICAgICAgICByZXR1cm4ge2xhdCwgbG9ufTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgb29wcy4gJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuLy8gZ2V0IGN1cnJlbnQsIGhvdXJseSwgYW5kIGRhaWx5IHdlYXRoZXIgZGF0YSB1c2luZyBnZW8gY29vcmRpbmF0ZXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoICh1cmwsIHttb2RlOiAnY29ycyd9KTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycldlYXRoZXIoY29udGFpbmVyLCB0ZW1wLCBjdXJyQ29uZGl0aW9uLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpKTtcblxuICAgIC8vIGkgZGl2aWRlZCB0aGUgc2VjdGlvbiBpbnRvIHR3byBkaXZzIHNvIGl0IHdvdWxkIGJlIGVhc2llciB0byBzdHlsZVxuICAgIGNvbnN0IHRvcERpdiA9IGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgndG9wLWRpdicpO1xuXG4gICAgLy8gdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IHRlbXBQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgdGVtcFAudGV4dENvbnRlbnQgPSB0ZW1wO1xuICAgIC8vIGN1cnJlbnQgY29uZGl0aW9uLCBsaWtlIHJhaW4sIG9yIGRyaXp6bGVcbiAgICBjb25zdCBjdXJyQ29uZGl0aW9uUCA9IHRvcERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGN1cnJDb25kaXRpb25QLnRleHRDb250ZW50ID0gY3VyckNvbmRpdGlvbjtcbiAgICAvLyBodW1hbiBwZXJjZXB0aW9uIG9mIHdlYXRoZXJcbiAgICBjb25zdCBmZWVsc0xpa2VQID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgZmVlbHNMaWtlUC50ZXh0Q29udGVudCA9IGZlZWxzTGlrZTtcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tLWRpdicpO1xuXG4gICAgLy8gd2luZCBzcGVlZCBpbiBtZXRyZS9zZWNcbiAgICBjb25zdCB3aW5kUCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHdpbmRQLnRleHRDb250ZW50ID0gd2luZDtcbiAgICAvLyBodW1pZGl0eSwgJVxuICAgIGNvbnN0IGh1bWlkaXR5UCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGh1bWlkaXR5UC50ZXh0Q29udGVudCA9IGh1bWlkaXR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENpdHlEYXRlKG9mZnNldCwgY2l0eSwgY29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gc2V0Q2l0eShjaXR5KSB7XG4gICAgICAgIGNvbnN0IGNpdHlQID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAgICAgLy8gJyBLWUlWICcgPT4gJ0t5aXYnIFxuICAgICAgICAvLyByZW1vdmUgc3BhY2VzXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHN0YXJ0IHN0ciB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBjaXR5LnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gY2l0eS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuXG4gICAgICAgIGNpdHlQLnRleHRDb250ZW50ID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREYXRlKG9mZnNldCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIG9mZnNldCAqIDEwMDAgXG4gICAgICAgIClcbiAgICAgICAgICAgIC50b1VUQ1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICB9XG4gICAgc2V0Q2l0eShjaXR5KTtcbiAgICBzZXREYXRlKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgd2VhdGhlckFwaSBmcm9tICcuL2FwaS1mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgZG9tRnVuYyBmcm9tICcuL2RvbS1mdW5jdGlvbnMnO1xuXG5sZXQgY2l0eSA9ICdsb25kb24nO1xubGV0IHdlYXRoZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIC8vIGdldCBsYXQgYW5kIGxvblxuICAgIGNvbnN0IGdlb2NvZGUgPSBhd2FpdCB3ZWF0aGVyQXBpLmdlb2NvZGUoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD0ke3dlYXRoZXJBcGkuS0VZfWAsIGNpdHkpO1xuICAgIFxuICAgIC8vIGdldCBhbGwgd2VhdGhlciBkYXRhIGZvciBzZWxlY3RlZCBjaXR5XG4gICAgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2dlb2NvZGUubGF0fSZsb249JHtnZW9jb2RlLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX0mdW5pdHM9bWV0cmljYCk7XG4gICAgXG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gICAgLy9jcmVhdGUgc2VjdGlvbiB0byBkaXNwbGF5IGN1cnJlbnQgd2VhdGhlciBkYXRhXG4gICAgLy8gZG9tRnVuYy5kaXNwbGF5Q3VycldlYXRoZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZGF0YScpLCB3ZWF0aGVyLmN1cnJlbnQudGVtcCwgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIHdlYXRoZXIuY3VycmVudC5mZWVsc19saWtlLCB3ZWF0aGVyLmN1cnJlbnQud2luZF9zcGVlZCwgd2VhdGhlci5jdXJyZW50Lmh1bWlkaXR5KTtcbiAgICBcbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUNpdHlEYXRlKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyRGF0YSgpO1xuICAgIC8vIGNsZWFyIHRoZSBjb250YWluZXIgd2hlbiBiZWZvcmUgY3JlYXRpbmcgaXRcbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGNvbnRhaW5lcik7XG4gICAgZG9tRnVuYy5zZXRDaXR5RGF0ZShkYXRhLnRpbWV6b25lX29mZnNldCwgJ2t5aXYnLCBjb250YWluZXIpO1xufVxuXG5kaXNwbGF5Q2l0eURhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGltZScpKTtcblxuYGBcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gYnV0dG9uJyk7XG4gIFxuICAgIFxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIHJlYXNzaWduIGlucHV0XG4gICAgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKTtcbiAgICBjaXR5ID0gY2l0eS52YWx1ZTtcbiAgICAvLyBjbGVhciB3ZWF0aGVyIHNlY3Rpb25cbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICAvLyBjbGVhciBpbnB1dFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZSA9ICcnO1xufSk7XG4gICAgICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9