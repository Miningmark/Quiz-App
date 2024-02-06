
let style = sessionStorage.getItem("syle");
let stylesheet = document.getElementById("style-mode");

function loadStyle(){
    switch (style) {
        case "dark":
            stylesheet.setAttribute('href', 'style-dark.css');
            break;
        case "light":
            stylesheet.setAttribute('href', 'style-light.css');
            break;
    }
}


window.onload = function() {
    loadStyle();
};



