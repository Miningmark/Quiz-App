document.addEventListener('DOMContentLoaded', function () {

    const label = document.querySelector('.question-bookmark-label');

    label.addEventListener('click', function () {
        console.log(label.id);
        label.classList.toggle('bookmark-checked');
    });


 

});