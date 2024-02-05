document.addEventListener('DOMContentLoaded', function () {

    let style = sessionStorage.getItem("syle");
    let stylesheet = document.getElementById("style-mode");

    function loadStyle(){
        switch (style) {
            case "dark":
                stylesheet.setAttribute('href', 'style-dark.css');
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
        loadStyle();
    };

    


 

});