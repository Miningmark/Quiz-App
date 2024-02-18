import {loadJSON, saveJSON, deleteJSON} from "./loadSaveDeleteDB.js"

const quizAppDB = loadJSON();

loadQuestions();



const allBookmarks = document.querySelectorAll('.question-bookmark-label');
//console.log(allBookmarks);
allBookmarks.forEach(function (labelIcon){
    labelIcon.addEventListener('click', function () {
        //console.log(labelIcon.id);
        labelIcon.classList.toggle('bookmark-checked');
        if(quizAppDB.questions[labelIcon.id.replace("labelID", "")].bookmark){
            quizAppDB.questions[labelIcon.id.replace("labelID", "")].bookmark = false;
            quizAppDB.bookmarks--;
        }else{
            quizAppDB.questions[labelIcon.id.replace("labelID", "")].bookmark = true;
            quizAppDB.bookmarks++;
        }
        saveJSON(quizAppDB);
        location.reload();
    });

});

const deleteQuestionButtons = document.querySelectorAll(".deleteQuestionButton");
deleteQuestionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let pos = Number(button.id.replace("buttonID", ""));
        if(quizAppDB.questions[pos].bookmark){
            quizAppDB.bookmarks --;
        }
        console.log(button.id.replace("buttonID", ""));
        console.log(pos);
        let questions = quizAppDB.questions
        quizAppDB.questions = questions.slice(0, pos).concat(questions.slice(pos + 1));
        saveJSON(quizAppDB);
        location.reload();
    });
});

const allShowAnswerButtons = document.querySelectorAll('.question-show-answer');
allShowAnswerButtons.forEach(function (button) {
    button.addEventListener('click', function(){
        let id = button.id.replace("buttonID", "");
        document.getElementById("answerID" + id).classList.toggle("hide");
    });
});


function loadQuestions(){
    const main = document.querySelector("main");
    main.innerHTML = "";

    for(let i = 0; i < quizAppDB.questions.length; i++){
        if(quizAppDB.questions[i].bookmark){
            let categories = ""
            quizAppDB.questions[i].categories.forEach(element => { 
                categories += `<span class="question-category">${element}</span>`;
            });
            const questionItem = `
                <section class="question-card" id="questionID${i}">
                    <input type="checkbox" class="question-bookmark-checkbox" id="checkboxID${i}">
                    <label for="bookmarkCheckbox" class="question-bookmark-label" id="labelID${i}"></label>
                    <h2 class="question-text">${quizAppDB.questions[i].question}</h2>
                    <button class="question-show-answer" id="buttonID${i}">Show Answer</button>
                    <p class="questionAnswer hide" id="answerID${i}">${quizAppDB.questions[i].answer}</p>
                    <div class="question-categories-box">
                        ${categories}
                    </div>
                    <button type="button" class="deleteQuestionButton" id="buttonID${i}"></button>
                </section>
        `;
            main.innerHTML += questionItem;
            if(quizAppDB.questions[i].bookmark){
                const checkbox = document.getElementById("checkboxID" + i);                 
                checkbox.checked = true;
                const label = document.getElementById("labelID" + i); 
                label.classList.toggle('bookmark-checked');
            }
        }
    }

}

