// Year and last modification
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent =
  "Last modified: " + lastModifiedDate;

// Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

// Dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    header.style.background = "#000";
    footer.style.background = "#000";
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    header.style.background = "#987144";
    footer.style.background = "#987144";
    modeButton.textContent = "🕶️";
  }
});

// Visit counter Week 03

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

// Weather Week 05
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const APIKey = "991816109fd541267e639540dee78786";
const Lat = "19.438332324259605";
const Long = "-99.13193968870992";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&units=imperial&appid=${APIKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();

async function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.innerHTML = `${desc}`;
}
