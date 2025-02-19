const requestURL =
  "https://andrevivs.github.io/wdd230/chamber/data/members.json";

async function getBussines() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    console.log(data);

    if (qualifiedMembers()) {
      displaySpotlight(data.businesses);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getBussines();

function qualifiedMembers() {
  let members = ["gold", "silver", "bronze", "np"];
  let qualifiedMembers = ["gold", "silver"];

  let memberType = members[Math.floor(Math.random() * members.length)];
  let welcomeMessage = document.getElementById("member");
  let welcome = document.createElement("h2");

  welcome.textContent = `Welcome ${memberType} member!`;
  welcome.style.textAlign = "left";
  welcome.style.margin = "5% 0";
  welcomeMessage.appendChild(welcome);

  if (qualifiedMembers.includes(memberType)) {
    return true;
  } else {
    let text = document.createElement("span");
    text.textContent = "Upgrade now to get more benefits";
    text.style.textAlign = "left";
    welcomeMessage.appendChild(text);
    return false;
  }
}

function displaySpotlight(spotlights) {
  let max = 3;
  let min = 2;
  let cardNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Crear una nueva sección con la clase spotlights
  let sectionSpotlights = document.createElement("section");
  sectionSpotlights.classList.add("spotlights");

  let sectionEvents = document.querySelector(".events");

  // Verificar si la sección ya existe y eliminarla para evitar duplicados
  let oldSpotlights = document.querySelector(".spotlights");
  if (oldSpotlights) {
    oldSpotlights.remove();
  }

  let usedIndexes = new Set();

  for (let i = 0; i < cardNumber; i++) {
    let randomBusinessIndex;

    // Asegurar que no se repitan negocios
    do {
      randomBusinessIndex = Math.floor(Math.random() * spotlights.length);
    } while (usedIndexes.has(randomBusinessIndex));

    usedIndexes.add(randomBusinessIndex);

    let business = spotlights[randomBusinessIndex];

    let card = document.createElement("div");
    let img = document.createElement("img");
    let textContainer = document.createElement("div");
    let title = document.createElement("h3");
    let text = document.createElement("p");
    let a = document.createElement("a");

    card.classList.add("spotlight");
    img.src = business.image;
    img.alt = business.description;
    img.width = 280;
    img.height = 200;
    img.loading = "lazy";
    title.textContent = business.name;
    text.textContent = business.description;
    a.href = business.website;
    a.textContent = "Website";
    a.target = "_blank";

    card.appendChild(img);
    textContainer.appendChild(title);
    textContainer.appendChild(text);
    textContainer.appendChild(a);
    card.appendChild(textContainer);
    sectionSpotlights.appendChild(card);
  }

  sectionEvents.insertAdjacentElement("afterend", sectionSpotlights);
}
