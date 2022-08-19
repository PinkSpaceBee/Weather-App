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
    popP.textContent = `Chance of rain: ${pop}`;
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

displayCityDate(document.querySelector('.city-time'));

async function displayWeather() {
    const weather = await getWeatherData();

    //create section to display current weather data
    _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayCurrWeather(document.querySelector('.curr-weather'), weather.current.weather[0].icon, weather.current.temp, weather.current.weather[0].description, weather.current.feels_like, weather.current.wind_speed, weather.current.humidity);

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
        _dom_functions__WEBPACK_IMPORTED_MODULE_1__.displayHourlyWeather(document.querySelector('.hourly-weather'), getTime(elem), getTemp(elem), getIcon(elem), getPop(elem));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvanMvYXBpLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC8uL3NyYy9qcy9kb20tZnVuY3Rpb25zLmpzIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1dlYXRoZXItQXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEtFWSA9ICc5MjFkMTNkMWYwNTExZGVjZThiMjJiYTkxZmM3NTE3Mic7XG5cbi8vIGdldCBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGJ5IGxvY2F0aW9uIG5hbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW9jb2RlKHVybCwgY2l0eSkge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG5cbiAgICAgICAgLy8gc2luY2UgZmV0Y2ggZG9lc24ndCB0aHJvdyBhbiBlcnJvciBmb3IgaHR0cHMgZXJyb3JzIEkgd3JvdGUgYSBjb25kaXRpb25hbCB0byBjYXRjaCA0eHggYW5kIDV4eCByZXNwb25zZXNcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgbGF0ID0gZGF0YVswXS5sYXQ7XG4gICAgICAgICAgICBjb25zdCBsb24gPSBkYXRhWzBdLmxvbjtcbiAgICAgICAgICAgIHJldHVybiB7bGF0LCBsb259O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBvb3BzLiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG4vLyBnZXQgY3VycmVudCwgaG91cmx5LCBhbmQgZGFpbHkgd2VhdGhlciBkYXRhIHVzaW5nIGdlbyBjb29yZGluYXRlc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKHVybCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKHVybCwge21vZGU6ICdjb3JzJ30pO1xuXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDdXJyV2VhdGhlcihjb250YWluZXIsIGljb24sIHRlbXAsIGN1cnJDb25kaXRpb24sIGZlZWxzTGlrZSwgd2luZCwgaHVtaWRpdHkpIHtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJykpO1xuXG4gICAgLy8gaSBkaXZpZGVkIHRoZSBzZWN0aW9uIGludG8gdHdvIGRpdnMgc28gaXQgd291bGQgYmUgZWFzaWVyIHRvIHN0eWxlXG4gICAgY29uc3QgdG9wRGl2ID0gY3VycmVudFdlYXRoZXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0b3AtZGl2Jyk7XG5cbiAgICAvLyB3ZWF0aGVyIGljb25cbiAgICBjb25zdCBpY29uSW1nID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICBpY29uSW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGAke3RlbXB9ICR7J1xcdTAwQjAnfUNgO1xuXG4gICAgLy8gY3VycmVudCBjb25kaXRpb24sIGxpa2UgcmFpbiwgb3IgZHJpenpsZVxuICAgIGNvbnN0IGN1cnJDb25kaXRpb25QID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAvLyBmaXJzdCBsZXR0ZXIgb2YgZXZlcnkgd29yZCB0byB1cHBlcmNhc2VcbiAgICBjdXJyQ29uZGl0aW9uID0gY3VyckNvbmRpdGlvblxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCh3b3JkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSB3b3JkLnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gd29yZC50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuICAgICAgICB3b3JkID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICB9KVxuICAgIC5qb2luKCcgJyk7XG5cbiAgICBjdXJyQ29uZGl0aW9uUC50ZXh0Q29udGVudCA9IGN1cnJDb25kaXRpb247XG5cbiAgICAvLyBodW1hbiBwZXJjZXB0aW9uIG9mIHdlYXRoZXIgaW4gQ1xuICAgIGNvbnN0IGZlZWxzTGlrZVAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBmZWVsc0xpa2VQLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtmZWVsc0xpa2V9YDtcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGN1cnJlbnRXZWF0aGVyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnYm90dG9tLWRpdicpO1xuXG4gICAgLy8gd2luZCBzcGVlZCBpbiBtZXRyZS9zZWNcbiAgICAvLyBzcGxpdCB0aGUgdGV4dCBpbnRvIDIgcCBlbGVtZW50cyBzbyBpdCB3b3VsZCBsb29rIGJldHRlclxuICAgIGNvbnN0IHdpbmRQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgd2luZFAudGV4dENvbnRlbnQgPSBgV2luZCBzcGVlZGA7XG4gICAgY29uc3Qgd2luZFBCb3R0b20gPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB3aW5kUEJvdHRvbS50ZXh0Q29udGVudCA9IGAke3dpbmR9IG0vc2A7XG4gICAgLy8gaHVtaWRpdHksICVcbiAgICAvLyBhZ2FpbiwgdHdvIHAgZWxlbWVudHNcbiAgICBjb25zdCBodW1pZGl0eVAgPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBodW1pZGl0eVAudGV4dENvbnRlbnQgPSBgSHVtaWRpdHlgO1xuICAgIGNvbnN0IGh1bWlkaXR5UEJvdHRvbSA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIGh1bWlkaXR5UEJvdHRvbS50ZXh0Q29udGVudCA9IGAke2h1bWlkaXR5fSVgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvdXJseVdlYXRoZXIoY29udGFpbmVyLCB0aW1lLCB0ZW1wLCBpY29uLCBwb3ApIHtcbiAgICBjb25zdCBkaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIC8vIHRpbWUsIGUuZy4gMTM6MDBcbiAgICBjb25zdCB0aW1lUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHRpbWVQLnRleHRDb250ZW50ID0gdGltZTtcblxuICAgIC8vIHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCB0ZW1wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHRlbXBQLnRleHRDb250ZW50ID0gYCR7dGVtcH0gJHsnXFx1MDBCMCd9Q2A7XG5cbiAgICAvLyB3ZWF0aGVyIGljb25cbiAgICBjb25zdCBpY29uSW1nID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICBpY29uSW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG5cbiAgICAvL2NoYW5jZSBvZiByYWluXG4gICAgY29uc3QgcG9wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHBvcFAudGV4dENvbnRlbnQgPSBgQ2hhbmNlIG9mIHJhaW46ICR7cG9wfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDaXR5RGF0ZShvZmZzZXQsIGNpdHksIGNvbnRhaW5lcikge1xuICAgIGZ1bmN0aW9uIHNldENpdHkoY2l0eSkge1xuICAgICAgICBjb25zdCBjaXR5UCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuXG4gICAgICAgIC8vICcgS1lJViAnID0+ICdLeWl2JyBcbiAgICAgICAgLy8gcmVtb3ZlIHNwYWNlc1xuICAgICAgICBjaXR5ID0gY2l0eS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICAvLyBzdGFydCBzdHIgd2l0aCB1cHBlcmNhc2UgbGV0dGVyXG4gICAgICAgIGNvbnN0IGZpcnN0TGV0dGVyID0gY2l0eS50b1VwcGVyQ2FzZSgpLnN1YnN0cigwLDEpO1xuICAgICAgICAvLyB0aGUgcmVzdCBvZiB0aGUgc3RyIGlzIGxvd2VyY2FzZVxuICAgICAgICBjb25zdCBzdHJMb3dlQ2FzZSA9IGNpdHkudG9Mb3dlckNhc2UoKS5zbGljZSgxKTtcblxuICAgICAgICBjaXR5UC50ZXh0Q29udGVudCA9IGAke2ZpcnN0TGV0dGVyfSR7c3RyTG93ZUNhc2V9YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0RGF0ZShvZmZzZXQpIHtcblxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBvZmZzZXQgKiAxMDAwIFxuICAgICAgICApXG4gICAgICAgICAgICAudG9VVENTdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC0xMik7XG5cbiAgICAgICAgY29uc3QgZGF0ZVAgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICAgICAgZGF0ZVAudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICBkYXRlUC5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgfVxuICAgIHNldENpdHkoY2l0eSk7XG4gICAgc2V0RGF0ZShvZmZzZXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4ocGFyZW50KSB7XG4gICAgbGV0IGNoaWxkID0gcGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIHdlYXRoZXJBcGkgZnJvbSAnLi9hcGktZnVuY3Rpb25zJztcbmltcG9ydCAqIGFzIGRvbUZ1bmMgZnJvbSAnLi9kb20tZnVuY3Rpb25zJztcblxubGV0IGNpdHkgPSAna3lpdic7IFxubGV0IHdlYXRoZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKCkge1xuICAgIC8vIGdldCBsYXQgYW5kIGxvblxuICAgIGNvbnN0IGdlb2NvZGUgPSBhd2FpdCB3ZWF0aGVyQXBpLmdlb2NvZGUoYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSZhcHBpZD0ke3dlYXRoZXJBcGkuS0VZfWAsIGNpdHkpO1xuICAgIFxuICAgIC8vIGdldCBhbGwgd2VhdGhlciBkYXRhIGZvciBzZWxlY3RlZCBjaXR5XG4gICAgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2dlb2NvZGUubGF0fSZsb249JHtnZW9jb2RlLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX0mdW5pdHM9bWV0cmljYCk7XG4gICAgXG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gICAgXG4gICAgcmV0dXJuIHdlYXRoZXI7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDaXR5RGF0ZShjb250YWluZXIpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcbiAgICAvLyBjbGVhciB0aGUgY29udGFpbmVyIHdoZW4gYmVmb3JlIGNyZWF0aW5nIGl0XG4gICAgZG9tRnVuYy5yZW1vdmVDaGlsZHJlbihjb250YWluZXIpO1xuICAgIGRvbUZ1bmMuc2V0Q2l0eURhdGUoZGF0YS50aW1lem9uZV9vZmZzZXQsIGNpdHksIGNvbnRhaW5lcik7XG59XG5cbmRpc3BsYXlDaXR5RGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10aW1lJykpO1xuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlcigpIHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoKTtcblxuICAgIC8vY3JlYXRlIHNlY3Rpb24gdG8gZGlzcGxheSBjdXJyZW50IHdlYXRoZXIgZGF0YVxuICAgIGRvbUZ1bmMuZGlzcGxheUN1cnJXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLXdlYXRoZXInKSwgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uaWNvbiwgd2VhdGhlci5jdXJyZW50LnRlbXAsIHdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZSwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG5cbiAgICBmdW5jdGlvbiBnZXRUaW1lKGVsZW0pIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGVsZW0uZHQgKiAxMDAwO1xuICAgICAgICBjb25zdCBsb2NhbE9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICAgICAgICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldDtcbiAgXG4gICAgICAgIGNvbnN0IGNpdHkgPSB1dGMgKyAod2VhdGhlci50aW1lem9uZV9vZmZzZXQgKiAxMDAwKTtcbiAgICAgICAgY29uc3QgY2l0eVRpbWUgPSBuZXcgRGF0ZShjaXR5KS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJywgeyBob3VyMTI6IGZhbHNlIH0pLnNsaWNlKDAsNSk7XG5cbiAgICAgICAgLy8gYmVjYXVzZSBmb3Igc29tZSByZWFzb24gaXQgZGlzcGxheXMgbWlkbmlnaHQgYXMgMjQ6MDAsIHdobyBkb2VzIHRoYXQ/P1xuICAgICAgICBpZiAoY2l0eVRpbWUgPT09ICcyNDowMCcpIHtcbiAgICAgICAgICAgIGNpdHlUaW1lID0gJzAwOjAwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2l0eVRpbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGVtcChlbGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0udGVtcCk7XG4gICAgICAgIHJldHVybiBlbGVtLnRlbXA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SWNvbihlbGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0ud2VhdGhlclswXS5pY29uKTtcbiAgICAgICAgcmV0dXJuIGVsZW0ud2VhdGhlclswXS5pY29uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcChlbGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW0ucG9wKTtcbiAgICAgICAgcmV0dXJuIGVsZW0ucG9wO1xuICAgIH1cblxuICAgIC8vIHJldHVybnMgZXZlcnkgM3JkIGhvdXIgXG4gICAgY29uc3QgaG91cmx5ID0gd2VhdGhlci5ob3VybHlcbiAgICAuc3BsaWNlKDAsIDI1KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4ICUgMyA9PT0gMDtcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICBkb21GdW5jLmRpc3BsYXlIb3VybHlXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktd2VhdGhlcicpLCBnZXRUaW1lKGVsZW0pLCBnZXRUZW1wKGVsZW0pLCBnZXRJY29uKGVsZW0pLCBnZXRQb3AoZWxlbSkpO1xuICAgIH0pO1xuXG59XG5cbmRpc3BsYXlXZWF0aGVyKCk7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gYnV0dG9uJyk7XG4gIFxuICAgIFxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIHJlYXNzaWduIGlucHV0XG4gICAgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKTtcbiAgICBjaXR5ID0gY2l0eS52YWx1ZTtcbiAgICAvLyBjbGVhciB3ZWF0aGVyIHNlY3Rpb25cbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRhdGEnKSk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICAvLyBjbGVhciBpbnB1dFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZSA9ICcnO1xufSk7XG4gICAgICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9