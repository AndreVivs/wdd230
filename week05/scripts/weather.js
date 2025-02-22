// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const APIKey = "991816109fd541267e639540dee78786";
const Lat = "49.74854089633689";
const Long = "6.636176132441316";

// Weather API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&units=imperial&appid=${APIKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();

async function displayResults(data) {
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = `${desc}`;
}
