console.log("its working");

const API_KEY = "9e335d0b6369181cf5c4c566761fbde2";

async function showWeather() {
  let city = "goa";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();
  console.log("Weather data:->" + data);
}
