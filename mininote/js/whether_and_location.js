const whether = document.querySelector('#whether')
const locate = document.querySelector('#location')
const API_KEY = "45f3e8ce583b9a384f6134edb51a6d41"


function noweather(){
   alert('날씨 정보를 불러오지 못했습니다.')
}

function okweather(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        whether.innerText = data.weather[0].main
        locate.innerText = data.name
    })
}

navigator.geolocation.getCurrentPosition(okweather,noweather)