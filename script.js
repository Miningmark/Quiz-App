document.addEventListener('DOMContentLoaded', function () {

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
            default:
                stylesheet.setAttribute('href', 'style-light.css');
                break;
        }
    }


window.onload = function() {
    loadStyle();
};

    const allBookmarks = document.querySelectorAll('.question-bookmark-label');

    allBookmarks.forEach(function (labelIcon){
        labelIcon.addEventListener('click', function () {
            //console.log(label.id);
            labelIcon.classList.toggle('bookmark-checked');
        });

    });
 

});