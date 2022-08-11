export function displayCurrWeather(container, temp, currCondition, feelsLike, wind, humidity) {
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

export function clearWeatherDiv(div) {
    let child = div.lastElementChild;

    while (child) {
        div.removeChild(child);
        child = div.lastElementChild;
    }
}