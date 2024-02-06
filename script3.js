
let style = sessionStorage.getItem("syle");
let stylesheet = document.getElementById("style-mode");
loadStyle();

function loadStyle(){
    switch (style) {
        case "dark":
            stylesheet.setAttribute('href', 'style-dark.css');
            document.getElementById("checkbox-dark").checked = true;
            break;
        case "light":
            stylesheet.setAttribute('href', 'style-light.css');
            break;
    }
}

document.getElementById("checkbox-dark").addEventListener("click", ()=>{
    if(document.getElementById("checkbox-dark").checked == true){
        stylesheet.setAttribute('href', 'style-dark.css');
        sessionStorage.setItem("syle", "dark");
    }else{
        stylesheet.setAttribute('href', 'style-light.css');
        sessionStorage.setItem("syle", "light");
    }
});





