import './errorHandling.css';
const buildErrorDOM = ()=>{
    const errorDom = document.createElement('div');
    errorDom.classList.add("ErrorHandling");
    const text = document.createElement('p');
    text.classList.add("ErrorText");
    errorDom.appendChild(text);
    document.body.appendChild(errorDom);
};

const ErrorDisplay = (text)=>{
    const textDOM = document.querySelector(".ErrorText");
    textDOM.textContent = text;
    document.querySelector('.ErrorHandling').classList.add("shift");
    setTimeout(() => {
        document.querySelector('.ErrorHandling').classList.remove("shift");
    }, 5000);
};
export {buildErrorDOM, ErrorDisplay}