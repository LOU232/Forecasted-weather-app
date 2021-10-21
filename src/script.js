let dateElement = document.querySelector("#date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentDate = currentTime.getDate();
let dayIndex = currentTime.getDay();
let year = currentTime.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthIndex = currentTime.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
dateElement.innerHTML = `${hours}:${minutes}, ${days[dayIndex]}, ${currentDate} ${months[monthIndex]}, ${year}`;

// feature 2

function retrievePosition(position) {
  let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

function showWeather(response) {
  let h4 = document.querySelector("h4");
  h4.innerHTML = `${response.data.name}`;
  let temperature = Math.round(response.data.main.temp);
  let h5 = document.querySelector("h5");
  h5.innerHTML = `${temperature}°c`;
}

function searchForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  if (city !== "") {
    let h4 = document.querySelector("h4");
    h4.innerHTML = `Current location: ${city}`;

    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
}

let form = document.querySelector(`#citySearch-form`);
form.addEventListener("submit", searchForm);
