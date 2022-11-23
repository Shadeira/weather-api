let search = 'New York';
const apiKey =''

const cityName = document.querySelector("#city-name")
const temperature = document.querySelector("#temperature") 
const feelsLike = document.querySelector("#feels-like") 
const windSpeed = document.querySelector("#wind-speed") 
const cityInput = document.querySelector("#city-input") 
const weatherIcon = document.querySelector("#weather-icon"); 

const cityForm = document.querySelector("#city-form")

cityForm.addEventListener('submit',(event) => {
    event.preventDefault();
    search =cityInput.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
.then(res=>res.json())
.then(data=>{
    cityName.innerText = data.name;
    temperature.innerText = data.main.temp;
    feelsLike.innerText = data.main.feels_like;
    windSpeed.innerText = data.wind.speed;
    weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
})
.catch(err=>console.log(err))
})