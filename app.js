console.log("Script loading...");
// const api = `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1b1c92652bc7397d30b8a9b4342ee55b&units=metric`;

const apiKey = `1b1c92652bc7397d30b8a9b4342ee55b`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const userInput = document.querySelector(".userInput");
const searchbtn = document.querySelector(".btn");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  // return data;
  console.log(data);
  document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
  document.querySelector(".city").innerHTML = `${data.name}`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}  km/h`;

  document.querySelector(
    ".weather-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

searchbtn.addEventListener("click", () => {
  // console.log(userInput.value)
  checkWeather(userInput.value);
});
