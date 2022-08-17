export function displayCurrWeather(container, temp, currCondition, feelsLike, wind, humidity) {
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
