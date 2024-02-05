document.addEventListener('DOMContentLoaded', function () {

    const label = document.querySelector('.question-bookmark-label');
    console.log(label.id);

    label.addEventListener('click', function () {
        console.log(label.id);
        label.classList.toggle('bookmark-checked');
    });

   

    function toggleCheckbox() {
        var stylesheet = document.getElementById("style-mode");
        if(document.getElementById("test").checked == true){
            stylesheet.setAttribute('href', 'style-dark.css');
        }else{
            stylesheet.setAttribute('href', 'style-light.css');
        }
    }

});