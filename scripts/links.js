const baseURL = "https://andrevivs.github.io/wdd230/";
const linksURL = "https://andrevivs.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);

    displayLinks(data);
  } catch (error) {
    throw Error(error);
  }
}

getLinks();

function displayLinks(data) {
  // Data ES UN OBJETO notation (JSON) que contiene weeks y este es un arreglo de objetos
  const list = document.querySelector(".links");
  list.innerHTML = "";

  data.weeks.forEach((week) => {
    //data.weeks es igual a un arreglo weeks=[{week:"week 01", links:[{link:"text", link:"text"},{}...]  }, {week:"week 02", ...}] por lo que puedes usar un foeEach
    let item = document.createElement("li");
    item.textContent = `${week.week}: `; // En este punto entraste al primer objeto y week.week es igual a "week 01"

    week.links.forEach((link, index) => {
      //Tienes que hacer un forEach adentro de este forEach porque links contiene otro arreglo que debes recorrer y accedes como week.links
      //Link es el objeto que esta en el arreglo de links por lo que ingresas a las KEYS con link.url y link.title.
      let a = document.createElement("a");
      a.setAttribute("href", link.url);
      a.setAttribute("target", "_blank"); // Abrir en nueva pestaña
      a.textContent = link.title;

      item.appendChild(a); // Agregar el enlace dentro del <li>

      // Agregar separador " | " entre links, excepto en el último
      if (index < week.links.length - 1) {
        item.appendChild(document.createTextNode(" | "));
      }
      //Una que que termina con los valordes de ese objeto, el loop se mueve al siguiente objeto del arreglo.
    });

    list.appendChild(item); // Agregar el <li> a la lista
    //Una que que termina con los valordes de ese objeto, el loop se mueve al siguiente objeto del arreglo.
  });
}
