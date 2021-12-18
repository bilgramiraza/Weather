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

export {display};