'use strict'

import {apiKey} from './api-key';

async function getGeocode() {
    try {
        const city = 'kyiv';
        
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`, {mode: 'cors'});

        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

getGeocode();

export {
    getGeocode
}

