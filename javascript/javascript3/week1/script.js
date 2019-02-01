// api key is    ea7d50941ba0ec9834c86e74dd179747
// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ea7d50941ba0ec9834c86e74dd179747


// put the input value in the fetch link
// parse the data to json
// output the data to html
// get the input value

let appKey = "ea7d50941ba0ec9834c86e74dd179747";
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");

button.addEventListener("click", () => {
    let apiLink = " https://api.openweathermap.org/data/2.5/weather?q=";
    let city = document.querySelector("#search-txt").value;
    let url = apiLink + city + myApi;


	if(city!==" "){
    fetch(url)
        .then(response => response.json())
        .then((weather1) => {

        weather.innerHTML = weather1.weather[0].description;
        });
    }
    else{
        weather.innerHTML = "enter the city name"
    }
});


searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
}

function httpRequestAsync(url, callback)
{
  console.log("searched cities");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}