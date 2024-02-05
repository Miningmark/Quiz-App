window.onload = function() {
    document.getElementById("test").addEventListener("click", toggleCheckbox());
};


function toggleCheckbox() {
    var stylesheet = document.getElementById("style-mode");
    if(document.getElementById("test").checked == true){
        stylesheet.setAttribute('href', 'style-dark.css');
    }else{
        stylesheet.setAttribute('href', 'style-light.css');
    }
}