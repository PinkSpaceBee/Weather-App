const KEY = '921d13d1f0511dece8b22ba91fc75172';

export function getCityName(form) {
const city = form.value;
return city;
}

// get latitude and longitude by location name
export async function geocode(city) {

    try {
        const response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${KEY}`, {mode: 'cors'});

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

// get current weather data using geo coordinates
export async function getWeatherData(lat, lon) {
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`, {mode: 'cors'});

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}
