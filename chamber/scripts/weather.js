// Select HTML elements in the document
//const currentTemp = document.querySelector("#weather-number");
//const weatherIcon = document.querySelector("#weather-icon");
//const captionDesc = document.querySelector("figcaption");
const place = document.querySelector("#place");

const APIKey = "991816109fd541267e639540dee78786";
const Lat = "47.60356825235933";
const Long = "-122.16667123865112";

// Weather API
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&units=imperial&appid=${APIKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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
  let indexDay = 0;
  let desireDays = 3;

  place.innerHTML = `${data.city.name}, ${data.city.country}`;

  for (let i = 0; i < data.list.length && indexDay < desireDays; i += 8) {
    let element = data.list[i];
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let span = document.createElement("span");
    let figcaption = document.createElement("figcaption");
    let dateSpan = document.createElement("span");

    let date = new Date(element.dt_txt);
    const iconsrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
    span.innerHTML = `${element.main.temp}&deg;F`;
    let desc = element.weather[0].description;
    img.setAttribute("src", iconsrc);
    img.setAttribute("alt", desc);
    figcaption.innerHTML = desc;
    figcaption.style.fontWeight = "bold";
    dateSpan.innerHTML = date.toDateString();

    figure.appendChild(img);
    figure.appendChild(span);
    figure.appendChild(figcaption);
    figure.appendChild(dateSpan);

    document.querySelector("#weatherByDays").appendChild(figure);

    indexDay++;
  }
}
