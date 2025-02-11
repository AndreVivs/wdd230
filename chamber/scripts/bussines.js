// Display images in a grid or list
// conection with the data
// Conexión con los datos
const requestURL =
  "https://andrevivs.github.io/wdd230//chamber/data/members.json";

async function getBussines() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    displayBussines(data.businesses); // Cambiar de `data.members` a `data.businesses`
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getBussines();

function displayBussines(businesses) {
  const display = document.querySelector("article");
  display.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.textContent = "Directory Business";
  h2.style.textAlign = "center";
  display.appendChild(h2);

  businesses.forEach((business) => {
    let card = document.createElement("section");

    let title = document.createElement("h3");
    let img = document.createElement("img");
    let text = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("src", business.image);
    img.setAttribute("alt", business.description);
    title.textContent = business.name;
    text.textContent = business.description;
    a.setAttribute("href", business.website);
    a.textContent = "Website";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(a);

    display.appendChild(card);
  });
}

// Display images in a grid or list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
