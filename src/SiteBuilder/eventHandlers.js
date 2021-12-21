import { weatherAPI, forecastAPI } from '../WeatherAPI';
import { display } from '../SiteBuilder/display';

function eventHandlers(weather) {
    document.body.addEventListener("click",(event)=>{
        switch (event.target.className) {
            case "locationBtn":
                forecast(weather);
                break;
            case "forecastBtn":
                if(weather.isLocationSet())
                    extendedForecast(weather);
                else{
                    alert("Enter a Valid location");
                }
                break;
        }
    });
    document.querySelector(".units").addEventListener('change',()=>{
        if(weather.isLocationSet())
            display(weather);
    });
    window.addEventListener("unhandledrejection",(event)=>{
        console.log(event);
        event.preventDefault();
    });
}   

export default eventHandlers;

async function forecast(weather) {
    document.querySelector(".forecast").classList.add("hide");
    document.querySelector(".forecastBtn").classList.remove("hide");
    const seachBar = document.querySelector("#searchBar");
    const data = await weatherAPI(seachBar.value);
    if(data !== null){
        weather.setLocationData(data.lat, data.lon, data.location);
        weather.currentWeather = data;
        display(weather);
    }
}
async function extendedForecast(weather) {
    document.querySelector(".forecast").classList.remove("hide");
    document.querySelector(".forecastBtn").classList.add("hide");
    const [hourlyForecast, dailyForecast] = await forecastAPI(...weather.getCoords());
    if(hourlyForecast !== null || dailyForecast !== null ){
        weather.hourly = hourlyForecast;
        weather.daily = dailyForecast;
        display(weather);
    }
}