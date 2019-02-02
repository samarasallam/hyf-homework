// api key is    ea7d50941ba0ec9834c86e74dd179747
// https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=ea7d50941ba0ec9834c86e74dd179747


// put the input value in the fetch link
// parse the data to json
// output the data to html

// get the input value

let inputValue = document.getElementById("weather_data").value;

let searchQuery = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ea7d50941ba0ec9834c86e74dd179747`

fetch(searchQuery)
.then(response => response.json()) 
.then((sibeCats)=> {
//	console.log(sibeCats);
	console.log(sibeCats[0].url);
});

