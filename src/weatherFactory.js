class Weather{
    constructor(){
        this.lat = null;
        this.lon = null;
        this.location = null;
        this._currentWeather = {};
        this._hourly = [];
        this._daily = [];
    }
    set currentWeather(data){
        this._currentWeather = data;
    }
    set hourly(data){
        data.forEach(item => this._hourly.push(item));
    }
    set daily(data){
        data.forEach(item => this._daily.push(item));
    }
    get currentWeather(){
        return this._currentWeather;
    }    
    get hourly(){
        return this._hourly;
    }
    get daily(){
        return this._daily;
    }
    setLocationData(lat, lon, location){
        this.lat = lat;
        this.lon = lon;
        this.location = location;
    }
    getCoords(){
        if(this.lat || this.lon)
            return [this.lat, 
                    this.lon];
        else
            return null;
    }
    getLocation(){
        if(this.location)
            return this.location;
        else
            return null;
    }
    getCurrentWeather(){
        if((Object.keys(this.currentWeather)).length)
            return this.currentWeather;
        else
            return null;
    }
    getHourlyForcast(){
        if(Object.keys(this.hourly).length)
            return this.hourly;
        else
            return null;
    }
    getWeeklyForcast(){
        if(Object.keys(this.daily).length)
            return this.daily;
        else
            return null;
    }
    forecastExists(){
        if(Object.keys(this.hourly).length || Object.keys(this.daily).length)
            return true;
        else
            return false;
    }
    isLocationSet(){
        if(this.lat !== null && this.lon !== null)
            return true;
        else
            return false;
    }
}

export default Weather;