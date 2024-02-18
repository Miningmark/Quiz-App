import {loadJSON, saveJSON, deleteJSON} from "./loadSaveDeleteDB.js"

const form = document.querySelector('[data-js="form"]');

//output fields
const title = document.querySelector(".question-text");
const answer = document.querySelector(".questionAnswer");
const categories = document.querySelector(".question-categories-box");
//input fields
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const categoriesInput = document.getElementById('categories');

//--------------Submit new Question---------------------------------
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const categoryList = categoriesInput.value.split(",");
    const data = {
        question: questionInput.value,
        answer: answerInput.value,
        categories: categoryList,
        bookmark: false,
    };
    const quizAppDB = loadJSON();
    quizAppDB.questions.push(data);
    quizAppDB.addQuestions ++;
    console.log(quizAppDB);
    saveJSON(quizAppDB);

    //console.log(data);
    event.target.reset();
    resetInputPreview();
    event.target.elements.question.focus();

});

//----------Preview Questioncard---------------------
form.addEventListener("input", () => {
    if(questionInput.value.length > 0){
        title.textContent = questionInput.value;
    }
    if(answerInput.value.length > 0){
        answer.textContent = answerInput.value;
    }
    if(categoriesInput.value.length > 0){
        const categoryList = categoriesInput.value.split(",");
        categories.innerHTML = "";
        categoryList.forEach(category => {
            const categoryItem = document.createElement("span");
            categoryItem.textContent = category;
            categoryItem.classList.add("question-category");
            categories.appendChild(categoryItem);
        });
    }

});

function resetInputPreview(){
    title.textContent = "???";
    answer.textContent = "???";

    categories.innerHTML = "";
    ["???","???","???"].forEach(category => {
        const categoryItem = document.createElement("span");
        categoryItem.textContent = category;
        categoryItem.classList.add("question-category");
        categories.appendChild(categoryItem);
    });
}
