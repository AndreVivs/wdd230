const requestURL =
  "https://andrevivs.github.io/wdd230/chamber/data/members.json";

async function getBussines() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    console.log(data);
    const qualified = qualifiedMembers();
    if (qualified) {
      displaySpotligth(data.businesses);
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

function displaySpotligth(spotlights) {
  let max = 3;
  let min = 2;
  let cardNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //let randomBussinesIndex = Math.floor(Math.random() * spotlights.length);

  const display = document.querySelector(".spotlights");
  display.innerHTML = "";

  let usedIndexes = new Set();

  for (
    let spotlightsCreated = 0;
    spotlightsCreated < cardNumber;
    spotlightsCreated++
  ) {
    let randomBussinesIndex;

    // Asegurar que el negocio seleccionado no se repita
    do {
      randomBussinesIndex = Math.floor(Math.random() * spotlights.length);
    } while (usedIndexes.has(randomBussinesIndex));

    usedIndexes.add(randomBussinesIndex);

    let business = spotlights[randomBussinesIndex];

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

    card.appendChild(img);
    textContainer.appendChild(title);
    textContainer.appendChild(text);
    textContainer.appendChild(a);
    card.appendChild(textContainer);

    display.appendChild(card);
  }
}
