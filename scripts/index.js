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
