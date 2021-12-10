 import {ErrorDisplay} from './ErrorHandling/errorHandling'
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
                "temp": 0,
                "weather": "",
                "tempMax": 0,
                "tempMin": 0,
                "feelsLike": 0,
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
        const data = decodeData(rawData);
        return data;
    } catch (error) {
        ErrorDisplay(error);
        return nullData;
    }
}

function decodeData(rawData){

    let deg= '';
    if(rawData.wind.deg<=45 || rawData.wind.deg>=315)
        deg = 'North';
    else if(rawData.wind.deg>45 || rawData.wind.deg<=135)
        deg = 'East';
    else if(rawData.wind.deg>135 || rawData.wind.deg<=225)
        deg = 'South';
    else
        deg = 'West';

    const data = {
        "lat": rawData.coord.lat,
        "lon": rawData.coord.lon,
        "location": rawData.name,
        "icon": `http://openweathermap.org/img/wn/${rawData.weather[0].icon}@2x.png`,
        "temp": parseInt(rawData.main.temp),
        "weather": rawData.weather[0].main,
        "tempMax": parseInt(rawData.main["temp_max"]),
        "tempMin": parseInt(rawData.main["temp_min"]),
        "feelsLike": parseInt(rawData.main["feels_like"]),
        "pressure": rawData.main.pressure,
        "humidity": rawData.main.humidity,
        "visibility": rawData.visibility,
        "sunrise": rawData.sys.sunrise,
        "sunset": rawData.sys.sunset,
        "windSpeed": rawData.wind.speed,
        "windDirection": deg,
    };
    return data;
}

export {weatherAPIHandling as weatherAPI};