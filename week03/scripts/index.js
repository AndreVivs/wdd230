//document.addEventListener("DOMContentLoaded", () => {
// Year and last modification
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent =
  "Last modified: " + lastModifiedDate;

//Display images
const apiKey = "os9K5C2FG924AniIlFQx73B65ggk3jx6MRCUrIDmC3EFUZO9UdRNX8WO";
const query = "landscapes";
const url = `https://api.pexels.com/v1/search?query=${query}&per_page=20`;
const cardsContainer = document.getElementById("cardsContainer");

fetch(url, {
  headers: {
    Authorization: apiKey,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.photos.forEach((photo) => {
      const card = `
      <div class="card">  
        <picture>
          <img src=" ${photo.src.medium}" alt="Este es el id de la imagen ${photo.id} loading="lazy" />
        </picture>
        <h2>Photographer : ${photo.photographer}</h2>
      </div>
        `;
      cardsContainer.innerHTML += card;
    });
  })
  .catch((error) => console.error("Error al obtener las imágenes:", error));
//});
