function currentWeatherParse(rawData){

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
        "icon": rawData.weather[0].icon,
        "temp": rawData.main.temp,
        "weather": rawData.weather[0].main,
        "tempMax": rawData.main["temp_max"],
        "tempMin": rawData.main["temp_min"],
        "feelsLike": rawData.main["feels_like"],
        "pressure": rawData.main.pressure,
        "humidity": rawData.main.humidity,
        "visibility": rawData.visibility,
        "clouds": rawData.clouds.all,
        "windSpeed": rawData.wind.speed,
        "windDirection": deg,
    };
    return data;
}
function forecastParse(data) {
    const hours = dayParse(data.hourly);
    const days = weekParse(data.daily);
    return [hours.slice(1,25), days.slice(1,8)];
}

function dayParse(data) {
    const Day = data.map((item) =>
        ({
            time : item.dt,
            temp : item.temp,
            icon : item.weather[0].icon,
            disc : item.weather[0].description,
            pop : item.pop,
        }));
    return Day;
}
function weekParse(data) {
    const Week = data.map((item) =>
        ({
            date : item.dt,
            minTemp : item.temp.min,
            maxTemp : item.temp.max,
            icon : item.weather[0].icon,
            disc : item.weather[0].description,
            pop : item.pop,
        }));
    return Week;
}

export {currentWeatherParse, forecastParse};
