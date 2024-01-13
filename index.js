const apiKey = " c825128ecc944d4ab51185434241301";

document.querySelector("#weatherForm").addEventListener("submit", function(e){
  e.preventDefault();
  const location = document.querySelector("#locationInput").value;
  getWeatherData(location);
});

async function getWeatherData(location){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    console.log(data)
    displayWeatherData(data);
  }
  
  function displayWeatherData(data) {
    const weatherInfoDiv = document.querySelector("#weatherInfo");
    weatherInfoDiv.innerText = `It is currently ${data.current.temp_f} degrees and ${data.current.condition.text} in ${data.location.name}, ${data.location.region}.`;
  }