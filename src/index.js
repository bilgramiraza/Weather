import './CSS/reset.css';
import './CSS/style.css';
import eventHandlers from './SiteBuilder/eventHandlers';
import {buildErrorDOM} from './ErrorHandling/errorHandling';
import Weather from './weatherFactory';

let weather = new Weather();
eventHandlers(weather);
buildErrorDOM();
