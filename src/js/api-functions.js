// my key 921d13d1f0511dece8b22ba91fc75172

export function getCityName(form) {
const city = form.value;
return city;
}

// get latitude and longitude
export async function geocode(city) {

    try {
        const response = await fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=921d13d1f0511dece8b22ba91fc75172`);

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

export async function getWeatherData(lat, lon) {
    console.log(`test ${lat} ${lon}`)
}

// let lat = await geocode();
// let lon = await geocode();

// lat = lat.lat;
// lon = lon.lon;

// console.log(lat, lon);
