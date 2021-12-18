import { weatherAPI, forecastAPI } from '../WeatherAPI';
import { display } from '../SiteBuilder/display';

function eventHandlers(weather) {
    document.body.addEventListener("click",(event)=>{
        switch (event.target.className) {
            case "locationBtn":
                forecast(weather);
                break;
            case "forecastBtn":
                if(weather.isLocationSet()){
                    document.querySelector(".forecast").classList.toggle("hide");
                    document.querySelector(".forecastBtn").classList.toggle("hide");
                    extendedForecast(weather);
                }
                else{
                    alert("Enter a Valid location");
                }
                break;
        }
    });
    window.addEventListener("unhandledrejection",(event)=>{
        console.log(event);
        event.preventDefault();
    });
}   

export default eventHandlers;

async function forecast(weather) {
    const seachBar = document.querySelector("#searchBar");
    const data = await weatherAPI(seachBar.value);
    if(data !== null){
        weather.setLocationData(data.lat, data.lon, data.location);
        weather.currentWeather = data;
        display(data);
    }
}
async function extendedForecast(weather) {
    const [hourlyForecast, dailyForecast] = await forecastAPI(...weather.getCoords());
    if(hourlyForecast !== null || dailyForecast !== null ){
        weather.hourly = hourlyForecast;
        weather.daily = dailyForecast;
        console.log(weather);
    }
}