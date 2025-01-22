const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
  if (input.value != "") {
    // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value); // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ""; // clear the input
    input.focus(); // set the focus back to the input
  }
});

let displayList = (item) => {
  let li = document.createElement("li");
  let deletebutton = document.createElement("button");
  li.textContent = item;
  deletebutton.textContent = "❌";
  deletebutton.classList.add("delete"); // this references the CSS rule .delete to size the delete button
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // remove the chapter from the array and localStorage
    input.focus(); // set the focus back to the input
  });
};

let deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1); // remove the '❌' from the end of the string (the last element)
  chaptersArray = chaptersArray.filter((item) => item != chapter); // create a new array with all items except the one to be deleted
  setChapterList(); // update the localStorage with the new array
};

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Set and Get functions for localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}
