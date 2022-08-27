export function displayCurrWeather(container, icon, temp, currCondition, feelsLike, wind, humidity) {

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

export function displayHourlyWeather(container, time, temp, icon, pop) {
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

export function displayDailyWeather(container, date, maxTemp, minTemp, icon) {
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

export function setCityDate(offset, city, container) {
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

export function removeChildren(parent) {
    let child = parent.lastElementChild;

    while (child) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}
