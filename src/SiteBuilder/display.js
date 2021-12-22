import DOMBuilder from "../DOM/DOMBuilder";
import {hourElement, dayElement} from "../DOM/DOMElements";
import {format} from 'date-fns';

function display(weather){
    displayCurrent(weather.getCurrentWeather());
    if(weather.forecastExists())
        displayForecast(weather.getHourlyForcast(), weather.getWeeklyForcast());
}

function buildForecastDOM() {
    const hourlyParent = document.querySelector(".hourly");
    const dailyParent = document.querySelector(".daily");
    for(let i=0; i<24; i++)
        DOMBuilder(hourElement,hourlyParent);
    for(let i=0; i<7; i++)
        DOMBuilder(dayElement, dailyParent);
}

export {display, buildForecastDOM};

function displayCurrent(data){
    const location = document.querySelector(".location");
    const temp = document.querySelector(".temp");
    const img = document.querySelector(".icon");
    const minTemp = document.querySelector(".minTemp");
    const maxTemp = document.querySelector(".maxTemp");
    const discription = document.querySelector(".discription");
    const feelsLike = document.querySelector(".feelsLike").lastElementChild;
    const pressure = document.querySelector(".pressure").lastElementChild;
    const humidity = document.querySelector(".humidity").lastElementChild;
    const visibility = document.querySelector(".visibility").lastElementChild;
    const cloudCover = document.querySelector(".clouds").lastElementChild;
    const windSpeed = document.querySelector(".windSpeed").lastElementChild;
    const windDirection = document.querySelector(".windDirection").lastElementChild;

    const units = document.querySelector('.units>input').checked;

    location.textContent = data.location;
    img.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
    discription.textContent = data.weather;
    pressure.textContent = (data.pressure).toString() + ' Pa'
    humidity.textContent = (data.humidity).toString() + ' %';
    cloudCover.textContent = (data.clouds).toString() + '%';
    windDirection.textContent = data.windDirection;

    if(units){
        temp.textContent = `${(parseInt(data.temp*1.8)+32)}°F`;
        minTemp.textContent = `${(parseInt(data.tempMin*1.8)+32)}°F`;
        maxTemp.textContent = `${(parseInt(data.tempMax*1.8)+32)}°F`;
        feelsLike.textContent = `${(parseInt(data.feelsLike*1.8)+32)}°F`;
        visibility.textContent = `${(parseFloat(data.visibility/1609).toFixed(2))} mi`;
        windSpeed.textContent = `${(parseFloat(data.windSpeed*2.237).toFixed(2))} mi/hr`;
    }
    else{
        temp.textContent = `${(parseInt(data.temp))}°C`;
        minTemp.textContent = `${(parseInt(data.tempMin))}°C`;
        maxTemp.textContent = `${(parseInt(data.tempMax))}°C`;
        feelsLike.textContent = `${(parseInt(data.feelsLike))}°C`;
        visibility.textContent = `${(parseFloat(data.visibility/1000).toFixed(2))} km`;
        windSpeed.textContent = `${(parseFloat(data.windSpeed*3.6).toFixed(2))} km/h`;
    }
}

function displayForecast(hourForecast, dayForecast) {
    const hourElements = document.querySelectorAll(".hour");
    const dayElements = document.querySelectorAll(".day");
    const units = document.querySelector('.units>input').checked;

    hourElements.forEach((element, index)=>{
        element.children[0].textContent = format(new Date(hourForecast[index].time),'h aa');
        element.children[1].src = `http://openweathermap.org/img/wn/${hourForecast[index].icon}@4x.png`;
        element.children[1].setAttribute('alt', hourForecast[index].disc);
        let temp = `${parseInt(hourForecast[index].temp)}°C`;
        if(units)
            temp = `${(parseInt(hourForecast[index].temp*1.8)+32)}°F`;

        element.children[2].textContent = `${temp}`;
    });

    dayElements.forEach((element, index)=>{
        element.children[0].textContent = format(new Date(dayForecast[index].date),'EEEE, MMM d');
        element.children[1].src = `http://openweathermap.org/img/wn/${dayForecast[index].icon}@4x.png`;
        element.children[1].setAttribute('alt', dayForecast[index].disc);
        let minTemp = `${parseInt(dayForecast[index].minTemp)}°C`;
        let maxTemp = `${parseInt(dayForecast[index].maxTemp)}°C`;
        if(units){
            minTemp = `${(parseInt(dayForecast[index].minTemp*1.8)+32)}°F`;
            maxTemp = `${(parseInt(dayForecast[index].maxTemp*1.8)+32)}°F`;
        }
        element.children[2].textContent = `${minTemp} / ${maxTemp}`;
    });
}