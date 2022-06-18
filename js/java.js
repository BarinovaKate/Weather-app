let now = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
let hour = now.getHours();
    if (hour < 10) {
  hour = `0${hour}`;
};
let minutes = now.getMinutes();
    if (minutes < 10) {
  minutes = `0${minutes}`;
};

function cityInput(event) {
  event.preventDefault();
  let input = document.querySelector("#input-city"); 
  let inputCity = document.querySelector("#city-now");
   inputCity.innerHTML = input.value;
  document.querySelector("#date-time").innerHTML = `${day} ${hour}:${minutes}`; 
  let apiKey = "360f33424340a0f95a8c619e705e8605";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=";
  
  function showTemperature(response) {

    document.querySelector("#num").innerHTML = `${Math.round(response.data.main.temp)}`;
    document.querySelector("#wind").innerHTML = `${Math.round(response.data.wind.speed)}`;
    document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}`;
    document.querySelector("#description").innerHTML = `${response.data.weather[0].main}`;
}
axios.get(`${apiUrl}${input.value}&units=metric&appid=${apiKey}`).then(showTemperature);

}
document.querySelector("#form-city").addEventListener("submit", cityInput);



function currentCity(event) {
  event.preventDefault();
  
  function myPosition(position) {
  let apiKey = "360f33424340a0f95a8c619e705e8605";
  let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude; 
  axios.get(`${apiUrl}&lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`).then(currentWeather);
}
  navigator.geolocation.getCurrentPosition(myPosition); 
  function currentWeather(response) {
    document.querySelector("#current-city").innerHTML = `${response.data.name}`;
    document.querySelector("#cTemp").innerHTML = `${Math.round(response.data.main.temp)}`;
    document.querySelector("#cWind").innerHTML = `${Math.round(response.data.wind.speed)}`;
    document.querySelector("#cHum").innerHTML = `${response.data.main.humidity}`;
    document.querySelector("#cCloud").innerHTML = `${response.data.weather[0].main}`;
  }
}
document.querySelector("#CC").addEventListener("click", currentCity);


function recalculation(event) {
  event.preventDefault();
  let newCF = document.querySelector("#num");
    newCF.innerHTML = "66";
}
let farengeit = document.querySelector("#c-f");
farengeit.addEventListener("click", recalculation);

function newRecalculation(event) {
    event.preventDefault();
    let newFC = document.querySelector("#num");
    newFC.innerHTML = "19";
     
}
let cels = document.querySelector("#f-c");
cels.addEventListener("click", newRecalculation);











