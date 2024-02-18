




export function loadJSON() {
    if (sessionStorage.getItem("quizAppDB")) {
        return JSON.parse(sessionStorage.getItem("quizAppDB"));
    } else {
        return {
        questions: [],
        addQuestions: 0,
        bookmarks: 0,
        };
    }
}

export function saveJSON(quizAppDB){
    const jsonQuizAppDB = JSON.stringify(quizAppDB);
    sessionStorage.setItem("quizAppDB", jsonQuizAppDB);
}

export function deleteJSON(){
    sessionStorage.removeItem("quizAppDB");
}