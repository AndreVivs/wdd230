// Year and last modification
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
