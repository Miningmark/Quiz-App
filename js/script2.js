let body = document.querySelector('[data-js="body"]');
let style = sessionStorage.getItem("syle");


loadStyle();

function loadStyle(){
    switch (style) {
        case "dark":
            body.classList.remove("light");
            body.classList.add("dark");
            break;
        case "light":
            body.classList.remove("dark");
            body.classList.add("light");
            break;
    }
}

