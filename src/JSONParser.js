
function basicParse(rawData){

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
        "icon": `http://openweathermap.org/img/wn/${rawData.weather[0].icon}@4x.png`,
        "temp": parseInt(rawData.main.temp),
        "weather": rawData.weather[0].main,
        "tempMax": parseInt(rawData.main["temp_max"]),
        "tempMin": parseInt(rawData.main["temp_min"]),
        "feelsLike": parseInt(rawData.main["feels_like"]),
        "pressure": rawData.main.pressure,
        "humidity": rawData.main.humidity,
        "visibility": rawData.visibility,
        "clouds": rawData.clouds.all,
        "windSpeed": rawData.wind.speed,
        "windDirection": deg,
    };
    return data;
}

export {basicParse};
