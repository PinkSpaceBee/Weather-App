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
function setCityDate(offset, container) {
    function setCity() {
        const city = container.appendChild(document.createElement('p'));
        city.textContent = 'city';
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
    setCity();
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
    console.log(data);
    //const x = new domFunc.weatherData(data);
    //console.log(x);
    //console.log(x.data.timezone_offset);
    // clear the container when before creating it
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.removeChildren(container);
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.setCityDate(data.timezone_offset, container);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOztBQUVQO0FBQ087O0FBRVA7QUFDQSw0Q0FBNEMsYUFBYTs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7QUFFcEIsVUFBVTtBQUNWLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asd0NBQXdDLGFBQWE7O0FBRXJEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmE7QUFDaUM7QUFDSDs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFrQixtREFBbUQsS0FBSyxTQUFTLCtDQUFjLENBQUM7QUFDNUg7QUFDQTtBQUNBLG9CQUFvQiwwREFBeUIsd0RBQXdELFlBQVksT0FBTyxZQUFZLGlDQUFpQywrQ0FBYyxDQUFDO0FBQ3BMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBc0I7QUFDMUIsSUFBSSx1REFBbUI7QUFDdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvYXBpLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9qcy9kb20tZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEtFWSA9ICc5MjFkMTNkMWYwNTExZGVjZThiMjJiYTkxZmM3NTE3Mic7XG5cbi8vIGdldCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGJ5IGxvY2F0aW9uIG5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW9jb2RlKHVybCwgY2l0eSkge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICAgICAgLy8gc2luY2UgZmV0Y2ggZG9lc24ndCB0aHJvdyBhbiBlcnJvciBmb3IgaHR0cHMgZXJyb3JzIEkgd3JvdGUgYSBjb25kaXRpb25hbCB0byBjYXRjaCA0eHggYW5kIDV4eCByZXNwb25zZXNcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgbGF0ID0gZGF0YVswXS5sYXQ7XG4gICAgICAgICAgICBjb25zdCBsb24gPSBkYXRhWzBdLmxvbjtcbiAgICAgICAgICAgIHJldHVybiB7bGF0LCBsb259O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBvb3BzLiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG4vLyBnZXQgY3VycmVudCwgaG91cmx5LCBhbmQgZGFpbHkgd2VhdGhlciBkYXRhIHVzaW5nIGdlbyBjb29yZGluYXRlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyV2VhdGhlcihjb250YWluZXIsIHRlbXAsIGN1cnJDb25kaXRpb24sIGZlZWxzTGlrZSwgd2luZCwgaHVtaWRpdHkpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJykpO1xuXG4gICAgLy8gaSBkaXZpZGVkIHRoZSBzZWN0aW9uIGludG8gdHdvIGRpdnMgc28gaXQgd291bGQgYmUgZWFzaWVyIHRvIHN0eWxlXG4gICAgY29uc3QgdG9wRGl2ID0gY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0b3AtZGl2Jyk7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IHRlbXA7XG4gICAgLy8gY3VycmVudCBjb25kaXRpb24sIGxpa2UgcmFpbiwgb3IgZHJpenpsZVxuICAgIGNvbnN0IGN1cnJDb25kaXRpb25QID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgY3VyckNvbmRpdGlvblAudGV4dENvbnRlbnQgPSBjdXJyQ29uZGl0aW9uO1xuICAgIC8vIGh1bWFuIHBlcmNlcHRpb24gb2Ygd2VhdGhlclxuICAgIGNvbnN0IGZlZWxzTGlrZVAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBmZWVsc0xpa2VQLnRleHRDb250ZW50ID0gZmVlbHNMaWtlO1xuXG4gICAgY29uc3QgYm90dG9tRGl2ID0gY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdib3R0b20tZGl2Jyk7XG5cbiAgICAvLyB3aW5kIHNwZWVkIGluIG1ldHJlL3NlY1xuICAgIGNvbnN0IHdpbmRQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSB3aW5kO1xuICAgIC8vIGh1bWlkaXR5LCAlXG4gICAgY29uc3QgaHVtaWRpdHlQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgaHVtaWRpdHlQLnRleHRDb250ZW50ID0gaHVtaWRpdHk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q2l0eURhdGUob2Zmc2V0LCBjb250YWluZXIpIHtcbiAgICBmdW5jdGlvbiBzZXRDaXR5KCkge1xuICAgICAgICBjb25zdCBjaXR5ID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgICAgIGNpdHkudGV4dENvbnRlbnQgPSAnY2l0eSc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldERhdGUob2Zmc2V0KSB7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgb2Zmc2V0ICogMTAwMCBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRvVVRDU3RyaW5nKClcbiAgICAgICAgICAgIC5zbGljZSgwLCAtMTIpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVQID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgICAgIGRhdGVQLnRleHRDb250ZW50ID0gZGF0ZTtcbiAgICAgICAgZGF0ZVAuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIH1cbiAgICBzZXRDaXR5KCk7XG4gICAgc2V0RGF0ZShvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgbGV0IGNoaWxkID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIHdlYXRoZXJBcGkgZnJvbSAnLi9hcGktZnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGRvbUZ1bmMgZnJvbSAnLi9kb20tZnVuY3Rpb25zJztcblxubGV0IGNpdHkgPSAnbG9uZG9uJztcbmxldCB3ZWF0aGVyO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgICAvLyBnZXQgbGF0IGFuZCBsb25cbiAgICBjb25zdCBnZW9jb2RlID0gYXdhaXQgd2VhdGhlckFwaS5nZW9jb2RlKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX1gLCBjaXR5KTtcbiAgICBcbiAgICAvLyBnZXQgYWxsIHdlYXRoZXIgZGF0YSBmb3Igc2VsZWN0ZWQgY2l0eVxuICAgIHdlYXRoZXIgPSBhd2FpdCB3ZWF0aGVyQXBpLmdldFdlYXRoZXJEYXRhKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtnZW9jb2RlLmxhdH0mbG9uPSR7Z2VvY29kZS5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJmFwcGlkPSR7d2VhdGhlckFwaS5LRVl9JnVuaXRzPW1ldHJpY2ApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIC8vY3JlYXRlIHNlY3Rpb24gdG8gZGlzcGxheSBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIC8vIGRvbUZ1bmMuZGlzcGxheUN1cnJXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSwgd2VhdGhlci5jdXJyZW50LnRlbXAsIHdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZSwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG4gICAgXG4gICAgcmV0dXJuIHdlYXRoZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDaXR5RGF0ZShjb250YWluZXIpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvL2NvbnN0IHggPSBuZXcgZG9tRnVuYy53ZWF0aGVyRGF0YShkYXRhKTtcbiAgICAvL2NvbnNvbGUubG9nKHgpO1xuICAgIC8vY29uc29sZS5sb2coeC5kYXRhLnRpbWV6b25lX29mZnNldCk7XG4gICAgLy8gY2xlYXIgdGhlIGNvbnRhaW5lciB3aGVuIGJlZm9yZSBjcmVhdGluZyBpdFxuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBkb21GdW5jLnNldENpdHlEYXRlKGRhdGEudGltZXpvbmVfb2Zmc2V0LCBjb250YWluZXIpO1xufVxuXG5kaXNwbGF5Q2l0eURhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGltZScpKTtcblxuYGBcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gYnV0dG9uJyk7XG4gIFxuICAgIFxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIHJlYXNzaWduIGlucHV0XG4gICAgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKTtcbiAgICBjaXR5ID0gY2l0eS52YWx1ZTtcbiAgICAvLyBjbGVhciB3ZWF0aGVyIHNlY3Rpb25cbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICAvLyBjbGVhciBpbnB1dFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZSA9ICcnO1xufSk7XG4gICAgICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9