const API_KEY="aec397e4b90ade30f1594fed9ebb14d5";

function onGeoOk(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const city=document.querySelector('div#weather span:first-child');
        const weather=document.querySelector('div#weather span:nth-child(2)');
        const temp=document.querySelector('div#weather span:nth-child(3)');
        const feelLike=document.querySelector('div#weather span:nth-child(4)');
        const humidity=document.querySelector('div#weather span:last-child');

        city.innerText=`You are in ${data.name}\n`;
        weather.innerText=`${data.weather[0].main}`;
        temp.innerText=`${Math.round(data.main.temp)}℃`;
        feelLike.innerText=`${Math.round(data.main.feels_like)}℃`;
        humidity.innerText=`💦${data.main.humidity}%`;

        console.log(data.name,data.weather[0].main,
            data.main.temp, data.main.feels_like, data.main.humidity);
        }
        )
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
