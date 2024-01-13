const apiKey = " c825128ecc944d4ab51185434241301";

document.querySelector("#weatherForm").addEventListener("submit", function(e){
  e.preventDefault();
  const location = document.querySelector("#locationInput").value;
  getWeatherData(location);
});

async function getWeatherData(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    displayWeatherData(data);
  }
  
  function displayWeatherData(data) {
    const weatherInfoDiv = document.querySelector("#weatherInfo");
    weatherInfoDiv.innerText = `It is currently ${data.main.temp} degrees and ${data.weather[0].description} in ${data.name}`;
  }