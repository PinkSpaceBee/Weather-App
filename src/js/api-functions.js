'use strict'

import {apiKey} from './api-key';

async function getGeocode() {
    try {
        const city = 'kyiv';
        //const city = 'Κίεβο';
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`, {mode: 'cors'});

        const geoData = await response.json();
        console.log(geoData);

        const lon = geoData[0].lon;
        const lat = geoData[0].lat;

        console.log(`lon ${lon} lat ${lat}`);
    } catch(err) {
        console.log(err);
    }
}

getGeocode();

export {
    getGeocode
}

