const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets); // temporary testing of data retreival

  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let fullName = document.createElement("h2"); // fill in the blank
    let portrait = document.createElement("img");
    let birthPlaceDateDeath = document.createElement("span");
    let childrens = document.createElement("span");
    let br = document.createElement("br");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    birthPlaceDateDeath.textContent = `${prophet.birthplace}: ${prophet.birthdate} - ${prophet.death}`;
    childrens.textContent = `Children(s): ${prophet.numofchildren}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(birthPlaceDateDeath);
    card.appendChild(br);
    card.appendChild(childrens);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();
