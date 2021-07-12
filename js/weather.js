const API_KEY="aec397e4b90ade30f1594fed9ebb14d5";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather=document.querySelector('div#weather div.weather-main div:first-child');
        const city=document.querySelector('div#weather div.weather-main div:last-child');
        const temp=document.querySelector('div#weather div.weather-temp div:first-child');
        const humidity=document.querySelector('div#weather div.weather-temp div:last-child');

        weather.innerText=`${data.weather[0].main}`;
        city.innerText=`in ${data.name}`;
        temp.innerText=`${Math.round(data.main.temp)}℃, Feels like ${Math.round(data.main.feels_like)}℃`;
        humidity.innerText=`${data.main.humidity}%💦 in air`;

        console.log(data.name,data.weather[0].main,
            data.main.temp, data.main.feels_like, data.main.humidity);
        }
        )
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
