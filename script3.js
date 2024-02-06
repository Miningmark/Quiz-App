
let style = sessionStorage.getItem("syle");
let stylesheet = document.getElementById("style-mode");
loadStyle();

function loadStyle(){
    switch (style) {
        case "dark":
            stylesheet.setAttribute('href', 'style-dark.css');
            document.getElementById("test").checked = true;
            //console.log("profile page");
            //console.log(sessionStorage.getItem("syle"));
            break;
        case "light":
            stylesheet.setAttribute('href', 'style-light.css');
            //console.log("profile page");
            //console.log(sessionStorage.getItem("syle"));
            break;
    }
}


window.onload = function() {
    document.getElementById("test").addEventListener("click", toggleCheckbox());
};


function toggleCheckbox() {
    if(document.getElementById("test").checked == true){
        stylesheet.setAttribute('href', 'style-dark.css');
        sessionStorage.setItem("syle", "dark");
        //console.log("profile page");
        //console.log(sessionStorage.getItem("syle"));
    }else{
        stylesheet.setAttribute('href', 'style-light.css');
        sessionStorage.setItem("syle", "light");
    }
}




