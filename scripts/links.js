const baseURL = "https://andrevivs.github.io/wdd230/";
const linksURL = "https://yourgithubusername.github.io/wdd230/data/links.json";

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

/*function displayLinks(data) {
  const list = document.querySelector("#links");
  data.links.forEach((link) => {
    let item = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", link.url);
    a.textContent = link.title;
    item.appendChild(`${data.week}:${a}`);
    list.appendChild(item);
  });
}*/
