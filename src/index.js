import './CSS/reset.css';
import './CSS/style.css';
import Weather from './weatherFactory';
import eventHandlers from './SiteBuilder/eventHandlers';
import {buildErrorDOM} from './ErrorHandling/errorHandling';
import {buildForecastDOM} from './SiteBuilder/display'

let weather = new Weather();
eventHandlers(weather);
buildForecastDOM();
buildErrorDOM();
