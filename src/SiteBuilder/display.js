import DOMBuilder from "../DOM/DOMBuilder";
import {hourElement, dayElement} from "../DOM/DOMElements";

function display(weather){
    displayCurrent(weather.getCurrentWeather());
    if(weather.forecastExists())
        displayForecast(weather.getHourlyForcast(), weather.getWeeklyForcast());
}

export {display};

function clearPanel(parentNode) {
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.lastChild);
    }
}

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

    location.textContent = data.location;
    temp.textContent = (parseInt((data.temp - 273.15))).toString() + '°';
    img.src = `http://openweathermap.org/img/wn/${data.icon}@4x.png`;
    minTemp.textContent = (parseInt((data.tempMin - 273.15))).toString() + '°';
    maxTemp.textContent = (parseInt((data.tempMax - 273.15))).toString() + '°';
    discription.textContent = data.weather;
    feelsLike.textContent = (parseInt((data.feelsLike - 273.15))).toString() + '°';
    pressure.textContent = (data.pressure).toString() + ' Pa'
    humidity.textContent = (data.humidity).toString() + ' %';
    visibility.textContent = (data.visibility).toString() + 'm';
    cloudCover.textContent = (data.clouds).toString() + '%';
    windSpeed.textContent = (data.windSpeed).toString() + ' m/s';
    windDirection.textContent = data.windDirection;
}

function displayForecast(hourForecast, dayForecast) {
    buildForecastDOM();
    const hourElements = document.querySelectorAll(".hour");
    const dayElements = document.querySelectorAll(".day");
    hourElements.forEach((element, index)=>{
        element.children[0].textContent = new Date(hourForecast[index].time).getHours();
        element.children[1].src = `http://openweathermap.org/img/wn/${hourForecast[index].icon}@4x.png`;
        element.children[1].setAttribute('alt', hourForecast[index].disc);
        element.children[2].textContent = `${hourForecast[index].temp}°C`;
    });
    dayElements.forEach((element, index)=>{
        element.children[0].textContent = new Date(dayForecast[index].date).getDate();
        element.children[1].src = `http://openweathermap.org/img/wn/${dayForecast[index].icon}@4x.png`;
        element.children[1].setAttribute('alt', dayForecast[index].disc);
        element.children[2].textContent = `${dayForecast[index].minTemp}°C / ${dayForecast[index].maxTemp}°C`;
    });
}

function buildForecastDOM() {
    const hourlyParent = document.querySelector(".hourly");
    const dailyParent = document.querySelector(".daily");
    clearPanel(hourlyParent);
    clearPanel(dailyParent);
    for(let i=0; i<24; i++)
        DOMBuilder(hourElement,hourlyParent);
    for(let i=0; i<7; i++)
        DOMBuilder(dayElement, dailyParent);
}