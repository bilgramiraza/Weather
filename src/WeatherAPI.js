 import {ErrorDisplay} from './ErrorHandling/errorHandling';
 import {basicParse} from './JSONParser';

 async function weatherAPI (location){
    const APIKey = '2de6ab5d3bf8eae8e2a6adb9b25e0dfe';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`;
    const response = await fetch(url,{mode:'cors'});
    return response;
};

function responseCheck(response) {
    if(!response.ok)
        throw response.statusText;
    else
        return response;
}

async function weatherAPIHandling(location) {
    let nullData = {
                "lat": 0,
                "lon": 0,
                "location": "",
                "icon": "",
                "temp": 273,
                "weather": "",
                "tempMax": 273,
                "tempMin": 273,
                "feelsLike": 273,
                "pressure": 0,
                "humidity": 0,
                "visibility": 0,
                "sunrise": 0,
                "sunset": 0,
                "windSpeed": 0,
                "windDirection": "",
            };
    try {
        const response = await weatherAPI(location)
                               .then(responseCheck);
        const rawData = await response.json();
        const data = basicParse(rawData);
        return data;
    } catch (error) {
        ErrorDisplay(error);
        return nullData;
    }
}

export {weatherAPIHandling as weatherAPI};