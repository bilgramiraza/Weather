// import DOMBuilder from "../DOM/DOMBuilder";
// import pageLayout from "./pageLayout";


// const basePageBuilder = ()=> {
//     pageLayout.forEach((obj)=>{
//         DOMBuilder(obj);
//     });

// }

// function clearPanel(parentNode) {
//     while(parentNode.firstChild){
//         parentNode.removeChild(parentNode.lastChild);
//     }
// }

// export {basePageBuilder};

function display(data){
    const location = document.querySelector(".location");
    const temp = document.querySelector(".temp");
    const img = document.querySelector(".icon");
    const minTemp = document.querySelector(".minTemp");
    const maxTemp = document.querySelector(".maxTemp");
    const discription = document.querySelector(".discription");
    const pressure = document.querySelector(".pressure");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".windSpeed");
    const windDirection = document.querySelector(".windDirection");
    const rise = document.querySelector(".rise");
    const set = document.querySelector(".set");

    location.textContent = data.location;
    temp.textContent = (data.temp - 273).toString() + ' °C';
    img.src = data.icon;
    minTemp.textContent = (data.tempMin - 273).toString() + ' °C';
    maxTemp.textContent = (data.tempMax - 273).toString() + ' °C';
    discription.textContent = data.weather;
    pressure.textContent = (data.pressure).toString() + ' Pa'
    humidity.textContent = (data.humidity).toString() + ' %';
    windSpeed.textContent = (data.windSpeed).toString() + ' m/s';
    windDirection.textContent = data.windDirection;
    rise.textContent = new Date(data.sunrise);
    set.textContent = new Date(data.sunset);
}

export {display};