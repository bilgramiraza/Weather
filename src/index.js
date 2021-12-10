import './CSS/reset.css';
import './CSS/style.css';
import eventHandlers from './SiteBuilder/eventHandlers';
import {buildErrorDOM} from './ErrorHandling/errorHandling';
// const weatherCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,current&appid=${APIKey}`,{mode:'cors'});


eventHandlers();
buildErrorDOM();
