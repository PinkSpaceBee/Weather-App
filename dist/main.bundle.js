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

    const bottomDiv = container.appendChild(document.createElement('div'));
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
let lastSearchedCity = city;
let inputfield = document.querySelector('input');
let weather;

async function getWeatherData() {
    try {
        const geocode = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.geocode(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}`, city);

        // get all weather data for selected city
        weather = await _api_functions__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(`https://api.openweathermap.org/data/2.5/onecall?lat=${geocode.lat}&lon=${geocode.lon}&exclude=minutely,alerts&appid=${_api_functions__WEBPACK_IMPORTED_MODULE_0__.KEY}&units=metric`);
    } catch (err) {
        // so the misspelled location name isn't displayed
        city = lastSearchedCity;
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
        let cityTime = new Date(city).toLocaleTimeString('en-US', { hour12: false }).slice(0,5);

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
        

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3hDLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSwrREFBMkI7QUFDbkMsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXNCO0FBQzFCLElBQUksMERBQXNCO0FBQzFCLElBQUksMERBQXNCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2FwaS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvLi9zcmMvanMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vV2VhdGhlci1BcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9XZWF0aGVyLUFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1dlYXRoZXItQXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBLRVkgPSAnOTIxZDEzZDFmMDUxMWRlY2U4YjIyYmE5MWZjNzUxNzInO1xuXG4vLyBnZXQgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBieSBsb2NhdGlvbiBuYW1lXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VvY29kZSh1cmwsIGNpdHkpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAodXJsLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgXG4gICAgICAgICAgICAvLyBzaW5jZSBmZXRjaCBkb2Vzbid0IHRocm93IGFuIGVycm9yIGZvciBodHRwcyBlcnJvcnMgSSB3cm90ZSBhIGNvbmRpdGlvbmFsIHRvIGNhdGNoIDR4eCBhbmQgNXh4IHJlc3BvbnNlc1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXQgPSBkYXRhWzBdLmxhdDtcbiAgICAgICAgICAgICAgICBjb25zdCBsb24gPSBkYXRhWzBdLmxvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2xhdCwgbG9ufTtcbiAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgb29wcy4gJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgXG5cbn1cblxuLy8gZ2V0IGN1cnJlbnQsIGhvdXJseSwgYW5kIGRhaWx5IHdlYXRoZXIgZGF0YSB1c2luZyBnZW8gY29vcmRpbmF0ZXNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSh1cmwpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoICh1cmwsIHttb2RlOiAnY29ycyd9KTtcblxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q3VycldlYXRoZXIoY29udGFpbmVyLCBpY29uLCB0ZW1wLCBjdXJyQ29uZGl0aW9uLCBmZWVsc0xpa2UsIHdpbmQsIGh1bWlkaXR5KSB7XG5cbiAgICAvLyBpIGRpdmlkZWQgdGhlIHNlY3Rpb24gaW50byB0d28gZGl2cyBzbyBpdCB3b3VsZCBiZSBlYXNpZXIgdG8gc3R5bGVcbiAgICBjb25zdCB0b3BEaXYgPSBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0b3AtZGl2Jyk7XG5cbiAgICAvLyB3ZWF0aGVyIGljb25cbiAgICBjb25zdCBpY29uSW1nID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpKTtcbiAgICBpY29uSW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGAke3RlbXB9ICR7J1xcdTAwQjAnfUNgO1xuXG4gICAgLy8gY3VycmVudCBjb25kaXRpb24sIGxpa2UgcmFpbiwgb3IgZHJpenpsZVxuICAgIGNvbnN0IGN1cnJDb25kaXRpb25QID0gdG9wRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAvLyBmaXJzdCBsZXR0ZXIgb2YgZXZlcnkgd29yZCB0byB1cHBlcmNhc2VcbiAgICBjdXJyQ29uZGl0aW9uID0gY3VyckNvbmRpdGlvblxuICAgIC5zcGxpdCgnICcpXG4gICAgLm1hcCh3b3JkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSB3b3JkLnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gd29yZC50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuICAgICAgICB3b3JkID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgICAgICByZXR1cm4gd29yZDtcbiAgICB9KVxuICAgIC5qb2luKCcgJyk7XG5cbiAgICBjdXJyQ29uZGl0aW9uUC50ZXh0Q29udGVudCA9IGN1cnJDb25kaXRpb247XG5cbiAgICAvLyBodW1hbiBwZXJjZXB0aW9uIG9mIHdlYXRoZXIgaW4gQ1xuICAgIGNvbnN0IGZlZWxzTGlrZVAgPSB0b3BEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBmZWVsc0xpa2VQLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtmZWVsc0xpa2V9YDtcblxuICAgIGNvbnN0IGJvdHRvbURpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1kaXYnKTtcblxuICAgIC8vIHdpbmQgc3BlZWQgaW4gbWV0cmUvc2VjXG4gICAgLy8gc3BsaXQgdGhlIHRleHQgaW50byAyIHAgZWxlbWVudHMgc28gaXQgd291bGQgbG9vayBiZXR0ZXJcbiAgICBjb25zdCB3aW5kUCA9IGJvdHRvbURpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIHdpbmRQLnRleHRDb250ZW50ID0gYFdpbmQgc3BlZWRgO1xuICAgIGNvbnN0IHdpbmRQQm90dG9tID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgd2luZFBCb3R0b20udGV4dENvbnRlbnQgPSBgJHt3aW5kfSBtL3NgO1xuICAgIC8vIGh1bWlkaXR5LCAlXG4gICAgLy8gYWdhaW4sIHR3byBwIGVsZW1lbnRzXG4gICAgY29uc3QgaHVtaWRpdHlQID0gYm90dG9tRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgaHVtaWRpdHlQLnRleHRDb250ZW50ID0gYEh1bWlkaXR5YDtcbiAgICBjb25zdCBodW1pZGl0eVBCb3R0b20gPSBib3R0b21EaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBodW1pZGl0eVBCb3R0b20udGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eX0lYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb3VybHlXZWF0aGVyKGNvbnRhaW5lciwgdGltZSwgdGVtcCwgaWNvbiwgcG9wKSB7XG4gICAgLy8gY29udGFpbmVyIGRpdlxuICAgIGNvbnN0IGRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cbiAgICAvLyB0aW1lLCBlLmcuIDEzOjAwXG4gICAgY29uc3QgdGltZVAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0aW1lUC50ZXh0Q29udGVudCA9IHRpbWU7XG5cbiAgICAvLyB0ZW1wZXJhdHVyZSBpbiBDXG4gICAgY29uc3QgdGVtcFAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICB0ZW1wUC50ZXh0Q29udGVudCA9IGAke3RlbXB9ICR7J1xcdTAwQjAnfUNgO1xuXG4gICAgLy8gd2VhdGhlciBpY29uXG4gICAgY29uc3QgaWNvbkltZyA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSk7XG4gICAgaWNvbkltZy5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgO1xuXG4gICAgLy9jaGFuY2Ugb2YgcmFpblxuICAgIGNvbnN0IHBvcFAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBwb3BQLnRleHRDb250ZW50ID0gYENoYW5jZSBvZiBwcmVjaXBpdGF0aW9uOiAke3BvcH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheURhaWx5V2VhdGhlcihjb250YWluZXIsIGRhdGUsIG1heFRlbXAsIG1pblRlbXAsIGljb24pIHtcbiAgICAvLyBjb250YWluZXIgZGl2IFxuICAgIGNvbnN0IGRpdiA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cbiAgICAvLyBkYXRlXG4gICAgY29uc3QgZGF0ZVAgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKTtcbiAgICBkYXRlUC50ZXh0Q29udGVudCA9IGRhdGU7XG5cbiAgICAvLyBtYXggdGVtcGVyYXR1cmUgaW4gQ1xuICAgIGNvbnN0IG1heFRlbXBQID0gZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG4gICAgbWF4VGVtcFAudGV4dENvbnRlbnQgPSBtYXhUZW1wO1xuXG4gICAgLy8gbWluIHRlbXBlcmF0dXJlIGluIENcbiAgICBjb25zdCBtaW5UZW1wUCA9IGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgIG1pblRlbXBQLnRleHRDb250ZW50ID0gbWluVGVtcDtcblxuICAgIC8vIHdlYXRoZXIgaWNvblxuICAgIGNvbnN0IGljb25JbWcgPSBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJykpO1xuICAgIGljb25JbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1AMngucG5nYDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENpdHlEYXRlKG9mZnNldCwgY2l0eSwgY29udGFpbmVyKSB7XG4gICAgZnVuY3Rpb24gc2V0Q2l0eShjaXR5KSB7XG4gICAgICAgIGNvbnN0IGNpdHlQID0gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XG5cbiAgICAgICAgLy8gJyBLWUlWICcgPT4gJ0t5aXYnIFxuICAgICAgICAvLyByZW1vdmUgc3BhY2VzXG4gICAgICAgIGNpdHkgPSBjaXR5LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIC8vIHN0YXJ0IHN0ciB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJcbiAgICAgICAgY29uc3QgZmlyc3RMZXR0ZXIgPSBjaXR5LnRvVXBwZXJDYXNlKCkuc3Vic3RyKDAsMSk7XG4gICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBzdHIgaXMgbG93ZXJjYXNlXG4gICAgICAgIGNvbnN0IHN0ckxvd2VDYXNlID0gY2l0eS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuXG4gICAgICAgIGNpdHlQLnRleHRDb250ZW50ID0gYCR7Zmlyc3RMZXR0ZXJ9JHtzdHJMb3dlQ2FzZX1gO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXREYXRlKG9mZnNldCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIG9mZnNldCAqIDEwMDAgXG4gICAgICAgIClcbiAgICAgICAgICAgIC50b1VUQ1N0cmluZygpXG4gICAgICAgICAgICAuc2xpY2UoMCwgLTEyKTtcblxuICAgICAgICBjb25zdCBkYXRlUCA9IGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xuICAgICAgICBkYXRlUC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgIGRhdGVQLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICB9XG4gICAgc2V0Q2l0eShjaXR5KTtcbiAgICBzZXREYXRlKG9mZnNldCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihwYXJlbnQpIHtcbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBjaGlsZCA9IHBhcmVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgd2VhdGhlckFwaSBmcm9tICcuL2FwaS1mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgZG9tRnVuYyBmcm9tICcuL2RvbS1mdW5jdGlvbnMnO1xuXG5sZXQgY2l0eSA9ICdreWl2JzsgXG5sZXQgbGFzdFNlYXJjaGVkQ2l0eSA9IGNpdHk7XG5sZXQgaW5wdXRmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5sZXQgd2VhdGhlcjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2VvY29kZSA9IGF3YWl0IHdlYXRoZXJBcGkuZ2VvY29kZShgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmFwcGlkPSR7d2VhdGhlckFwaS5LRVl9YCwgY2l0eSk7XG5cbiAgICAgICAgLy8gZ2V0IGFsbCB3ZWF0aGVyIGRhdGEgZm9yIHNlbGVjdGVkIGNpdHlcbiAgICAgICAgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXJBcGkuZ2V0V2VhdGhlckRhdGEoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2dlb2NvZGUubGF0fSZsb249JHtnZW9jb2RlLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmYXBwaWQ9JHt3ZWF0aGVyQXBpLktFWX0mdW5pdHM9bWV0cmljYCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHNvIHRoZSBtaXNzcGVsbGVkIGxvY2F0aW9uIG5hbWUgaXNuJ3QgZGlzcGxheWVkXG4gICAgICAgIGNpdHkgPSBsYXN0U2VhcmNoZWRDaXR5O1xuICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgY29uc3QgZXJyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGltZScpLnByZXBlbmQoZXJyTWVzc2FnZSk7XG4gICAgICAgIGVyck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTm8gcmVzdWx0cyc7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB3ZWF0aGVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Q2l0eURhdGUoY29udGFpbmVyKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG4gICAgLy8gY2xlYXIgdGhlIGNvbnRhaW5lciB3aGVuIGJlZm9yZSBjcmVhdGluZyBpdFxuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oY29udGFpbmVyKTtcbiAgICBkb21GdW5jLnNldENpdHlEYXRlKGRhdGEudGltZXpvbmVfb2Zmc2V0LCBjaXR5LCBjb250YWluZXIpO1xufVxuXG5kaXNwbGF5Q2l0eURhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktdGltZScpKTtcblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoKSB7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCk7XG5cbiAgICBmdW5jdGlvbiBnZXRUaW1lKGVsZW0pIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsVGltZSA9IGVsZW0uZHQgKiAxMDAwO1xuICAgICAgICBjb25zdCBsb2NhbE9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICAgICAgICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldDtcbiAgXG4gICAgICAgIGNvbnN0IGNpdHkgPSB1dGMgKyAod2VhdGhlci50aW1lem9uZV9vZmZzZXQgKiAxMDAwKTtcbiAgICAgICAgbGV0IGNpdHlUaW1lID0gbmV3IERhdGUoY2l0eSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHsgaG91cjEyOiBmYWxzZSB9KS5zbGljZSgwLDUpO1xuXG4gICAgICAgIC8vIGJlY2F1c2UgZm9yIHNvbWUgcmVhc29uIGl0IGRpc3BsYXlzIG1pZG5pZ2h0IGFzIDI0OjAwLCB3aG8gZG9lcyB0aGF0Pz9cbiAgICAgICAgaWYgKGNpdHlUaW1lID09PSAnMjQ6MDAnKSB7XG4gICAgICAgICAgICBjaXR5VGltZSA9ICcwMDowMCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNpdHlUaW1lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGUoZWxlbSkge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgbG9jYWxUaW1lID0gZWxlbS5kdCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IGxvY2FsT2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gICAgICAgIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0O1xuICBcbiAgICAgICAgY29uc3QgdXRjV09mZnNldCA9IHV0YyArICh3ZWF0aGVyLnRpbWV6b25lX29mZnNldCAqIDEwMDApO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodXRjV09mZnNldCkudG9Mb2NhbGVTdHJpbmcoKS5zbGljZSgwLDQpO1xuXG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIC8vIENVUlJFTlQgV0VBVEhFUlxuICAgIGRvbUZ1bmMuZGlzcGxheUN1cnJXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLXdlYXRoZXInKSwgd2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uaWNvbiwgd2VhdGhlci5jdXJyZW50LnRlbXAsIHdlYXRoZXIuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLCB3ZWF0aGVyLmN1cnJlbnQuZmVlbHNfbGlrZSwgd2VhdGhlci5jdXJyZW50LndpbmRfc3BlZWQsIHdlYXRoZXIuY3VycmVudC5odW1pZGl0eSk7XG5cbiAgICAvLyBIT1VSTFkgV0VBVEhFUlxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIb3VybHkoKSB7XG4gICAgXG4gICAgICAgIHdlYXRoZXIuaG91cmx5XG4gICAgICAgIC8vIGdldCB0aGUgZmlyc3QgMjQgaG91cnNcbiAgICAgICAgLnNwbGljZSgwLCAyNSlcbiAgICAgICAgLy8gZ2V0IGV2ZXJ5IDNyZCBob3VyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24odmFsdWUsIGluZGV4LCBhcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDMgPT09IDA7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBzZWN0aW9uIHRvIGRpc3BsYXkgaG91cmx5IHdlYXRoZXIgZGF0YVxuICAgICAgICAgICAgZG9tRnVuYy5kaXNwbGF5SG91cmx5V2VhdGhlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LXdlYXRoZXInKSwgZ2V0VGltZShlbGVtKSwgZWxlbS50ZW1wLCBlbGVtLndlYXRoZXJbMF0uaWNvbiwgZWxlbS5wb3ApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkaXNwbGF5SG91cmx5KCk7XG5cbiAgICAvLyBEQUlMWSBXRUFUSEVSICAgXG4gICAgd2VhdGhlci5kYWlseS5tYXAoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgZG9tRnVuYy5kaXNwbGF5RGFpbHlXZWF0aGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyJyksIGdldERhdGUoZWxlbSksIGVsZW0udGVtcC5tYXgsIGVsZW0udGVtcC5taW4sIGVsZW0ud2VhdGhlclswXS5pY29uKTtcbiAgICB9KTtcbn1cblxuZGlzcGxheVdlYXRoZXIoKTtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1iYXIgPiBidXR0b24nKTtcbiAgXG4gICAgXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gcmVhc3NpZ24gaW5wdXRcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZTtcbiAgICBjaXR5ID0gc2VhcmNoUXVlcnk7XG4gICAgXG4gICAgLy8gY2xlYXIgd2VhdGhlciBzZWN0aW9uc1xuICAgIGRvbUZ1bmMucmVtb3ZlQ2hpbGRyZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnItd2VhdGhlcicpKTtcbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktd2VhdGhlcicpKTtcbiAgICBkb21GdW5jLnJlbW92ZUNoaWxkcmVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS13ZWF0aGVyJykpO1xuXG4gICAgZGlzcGxheUNpdHlEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LXRpbWUnKSk7XG4gICAgZGlzcGxheVdlYXRoZXIoKTtcbiAgICAvLyBjbGVhciBpbnB1dFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyID4gaW5wdXQnKS52YWx1ZSA9ICcnO1xufSk7XG4gICAgICAgIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9