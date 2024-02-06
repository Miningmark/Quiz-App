let bodyElement = document.querySelector('[data-js="body"]');
let style = sessionStorage.getItem("syle");

loadStyle();

function loadStyle(){
    if(style != null){
        switch (style) {
            case "dark":
                bodyElement.classList.remove("light");
                bodyElement.classList.add("dark");
                if(document.getElementById("checkbox-dark")){
                    document.getElementById("checkbox-dark").checked = true;
                }
                break;
            case "light":
                bodyElement.classList.remove("dark");
                bodyElement.classList.add("light");
                break;
        }
    }
}