
let body = document.querySelector('[data-js="body"]');


document.getElementById("checkbox-dark").addEventListener("click", ()=>{
    if(document.getElementById("checkbox-dark").checked == true){
        body.classList.remove("light");
        body.classList.add("dark");
        sessionStorage.setItem("style", "dark");
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
        sessionStorage.setItem("syle", "light");
    }
});




