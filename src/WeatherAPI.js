 import {ErrorDisplay} from './ErrorHandling/errorHandling';
 import {currentWeatherParse, forecastParse} from './JSONParser';

 async function weatherAPI (location){
    const APIKey = '2de6ab5d3bf8eae8e2a6adb9b25e0dfe';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}&units=metric`;
    const response = await fetch(url,{mode:'cors'});
    return response;
}

async function forecastAPI(lat, lon) {
    const APIKey = '2de6ab5d3bf8eae8e2a6adb9b25e0dfe';
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric&exclude=minutely,current`;
    const response = await fetch(url,{mode:'cors'});
    return response;
}

function responseCheck(response) {
    if(!response.ok){
        console.log(response);
        throw response.statusText;}
    else
        return response;
}

async function weatherAPIHandling(location) {
    try {
        const response = await weatherAPI(location)
                               .then(responseCheck);
        const rawData = await response.json();
        const data = currentWeatherParse(rawData);
        return data;
    } catch (error) {
        ErrorDisplay(error);
        return null;
    }
}
async function forecastAPIHandling(lat,lon) {
    try {
        const response = await forecastAPI(lat, lon)
                               .then(responseCheck);
        const rawData = await response.json();
        const [hoursData, daysData] = forecastParse(rawData);
        return [hoursData, daysData];
    } catch (error) {
        ErrorDisplay(error);
        return [null, null];
    }
}
export {weatherAPIHandling as weatherAPI, forecastAPIHandling as forecastAPI};