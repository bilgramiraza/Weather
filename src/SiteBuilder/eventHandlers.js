import { weatherAPI, forecastAPI } from '../WeatherAPI';
import { display } from '../SiteBuilder/display';
import { ErrorDisplay } from '../ErrorHandling/errorHandling';

function eventHandlers(weather) {
    document.body.addEventListener("click",(event)=>{
        switch (event.target.className) {
            case "material-icons":
            case "locationBtn":
                forecast(weather);
                break;
            case "forecastBtn":
                extendedForecast(weather);
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
    const searchBar = document.querySelector("#searchBar").value.trim();
    if(searchBar === ''){
        ErrorDisplay("Enter a Location");
        return;
    }
    const data = await weatherAPI(searchBar);
    if(data !== null){
        weather.setLocationData(data.lat, data.lon, data.location);
        weather.currentWeather = data;
        display(weather);
    }
}
async function extendedForecast(weather) {
    if(!(weather.isLocationSet())){
        ErrorDisplay("Enter a Valid location");
        return;
    }
    document.querySelector(".forecast").classList.remove("hide");
    document.querySelector(".forecastBtn").classList.add("hide");
    const [hourlyForecast, dailyForecast] = await forecastAPI(...weather.getCoords());
    if(hourlyForecast !== null || dailyForecast !== null ){
        weather.hourly = hourlyForecast;
        weather.daily = dailyForecast;
        display(weather);
    }
}