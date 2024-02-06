
let body = document.querySelector('[data-js="body"]');
let style = sessionStorage.getItem("syle");


loadStyle();

function loadStyle(){
    switch (style) {
        case "dark":
            body.classList.remove("light");
            body.classList.add("dark");
            document.getElementById("checkbox-dark").checked = true;
            break;
        case "light":
            body.classList.remove("dark");
            body.classList.add("light");
            break;
    }
}

document.getElementById("checkbox-dark").addEventListener("click", ()=>{
    if(document.getElementById("checkbox-dark").checked == true){
        body.classList.remove("light");
        body.classList.add("dark");
        sessionStorage.setItem("syle", "dark");
    }else{
        body.classList.remove("dark");
        body.classList.add("light");
        sessionStorage.setItem("syle", "light");
    }
});




