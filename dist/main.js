/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const weatherCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,current&appid=${APIKey}`,{mode:'cors'});

async function weatherAPI(location) {
    const APIKey = '2de6ab5d3bf8eae8e2a6adb9b25e0dfe';
    const weatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`,{mode:'cors'});
    const responseJSON = await weatherCall.json();
    return responseJSON;
}

function parseJSON(data) {
    console.log(data);
}

const stuff = weatherAPI('hyderabad,india');
parseJSON(stuff);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZJQUE2SSxPQUFPLEdBQUcsWUFBWTs7QUFFbks7QUFDQTtBQUNBLHdGQUF3RixTQUFTLFNBQVMsT0FBTyxHQUFHLFlBQVk7QUFDaEk7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB3ZWF0aGVyQ2FsbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9MTcuMzg1MCZsb249NzguNDg2NyZleGNsdWRlPW1pbnV0ZWx5LGN1cnJlbnQmYXBwaWQ9JHtBUElLZXl9YCx7bW9kZTonY29ycyd9KTtcblxuYXN5bmMgZnVuY3Rpb24gd2VhdGhlckFQSShsb2NhdGlvbikge1xuICAgIGNvbnN0IEFQSUtleSA9ICcyZGU2YWI1ZDNiZjhlYWU4ZTJhNmFkYjliMjVlMGRmZSc7XG4gICAgY29uc3Qgd2VhdGhlckNhbGwgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7QVBJS2V5fWAse21vZGU6J2NvcnMnfSk7XG4gICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgd2VhdGhlckNhbGwuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpTT047XG59XG5cbmZ1bmN0aW9uIHBhcnNlSlNPTihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmNvbnN0IHN0dWZmID0gd2VhdGhlckFQSSgnaHlkZXJhYmFkLGluZGlhJyk7XG5wYXJzZUpTT04oc3R1ZmYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==