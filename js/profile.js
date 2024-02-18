import {loadJSON, saveJSON, deleteJSON} from "./loadSaveDeleteDB.js"

let body = document.querySelector('[data-js="body"]');

const quizAppDB = loadJSON();
loadCounters();

document.getElementById("checkbox-dark").addEventListener("click", () => {
  if (document.getElementById("checkbox-dark").checked == true) {
    body.classList.remove("light");
    body.classList.add("dark");
    sessionStorage.setItem("style", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    sessionStorage.setItem("style", "light");
  }
});

document.getElementById("deleteAllButton").addEventListener("click", () => {
  let deleteDataConfirm = confirm("Do you really want to permanently delete all data?");

  if (deleteDataConfirm) {
    alert("All data are deleted!");
    deleteJSON();
    quizAppDB = loadJSON();
    loadCounters();
  } else {
    alert("Delete all data Canceled!");
  }
});

function loadCounters() {
  document.getElementById("questionCounter").textContent =
    quizAppDB.addQuestions;
  document.getElementById("bookmarkCounter").textContent = quizAppDB.bookmarks;
}


