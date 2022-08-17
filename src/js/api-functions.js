export const KEY = '921d13d1f0511dece8b22ba91fc75172';

// get latitude and longitude by location name
export async function geocode(url, city) {

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
export async function getWeatherData(url) {
    const response = await fetch (url, {mode: 'cors'});

    const weatherData = await response.json();
    return weatherData;
}
