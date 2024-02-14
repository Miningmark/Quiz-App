

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    //save to DB
    event.target.reset();
    resetInputPreview();
    event.target.elements.question.focus();

});


//----------Preview Questioncard---------------------
//output fields
const title = document.querySelector(".question-text");
const answer = document.querySelector(".questionAnswer");
const categories = document.querySelector(".question-categories-box");
//input fields
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const categoriesInput = document.getElementById('categories');

form.addEventListener("input", () => {
    
    title.textContent = questionInput.value;
    answer.textContent = answerInput.value;

    const categoryList = categoriesInput.value.split(",");
    categories.innerHTML = "";
    categoryList.forEach(category => {
        const categoryItem = document.createElement("span");
        categoryItem.textContent = category;
        categoryItem.classList.add("question-category");
        categories.appendChild(categoryItem);
    });

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

