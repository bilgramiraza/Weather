import { weatherAPI } from '../WeatherAPI';
import { display } from '../SiteBuilder/display';

function eventHandlers() {
    document.body.addEventListener("click",(event)=>{
        switch (event.target.className) {
            case "locationBtn":
                app();
                break;
        }
    });
    window.addEventListener("unhandledrejection",(event)=>{
        console.log(event);
        event.preventDefault();
    });
}   

export default eventHandlers;

async function app() {
    const seachBar = document.querySelector("#searchBar");
    const data = await weatherAPI(seachBar.value);
    console.log(data);
    display(data);
}