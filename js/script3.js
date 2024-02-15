
let body = document.querySelector('[data-js="body"]');

const quizAppDB = loadJSON();
loadCounters();

document.getElementById("checkbox-dark").addEventListener("click", ()=>{
    
    if(document.getElementById("checkbox-dark").checked == true){
        body.classList.remove("light");
        body.classList.add("dark");
        sessionStorage.setItem("style", "dark");
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
        sessionStorage.setItem("style", "light");
    }
});



function loadCounters(){
    document.getElementById("questionCounter").textContent = quizAppDB.addQuestions;
    document.getElementById("bookmarkCounter").textContent = quizAppDB.bookmarks;
}




function loadJSON(){
    if(sessionStorage.getItem("quizAppDB")){
        return JSON.parse(sessionStorage.getItem("quizAppDB"));
    }else{
        return {   
                questions: [],
                addQuestions: 0,
                bookmarks: 0,
                };
    }
}