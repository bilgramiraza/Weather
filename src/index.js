// const weatherCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=17.3850&lon=78.4867&exclude=minutely,current&appid=${APIKey}`,{mode:'cors'});

async function weatherAPI(location) {
    const APIKey = 'nope';
    const weatherCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIKey}`,{mode:'cors'});
    const responseJSON = await weatherCall.json();
    return responseJSON;
}

function parseJSON(data) {
    console.log(data);
}

const stuff = weatherAPI('hyderabad,india');
parseJSON(stuff);