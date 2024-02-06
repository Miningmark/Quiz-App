

const allBookmarks = document.querySelectorAll('.question-bookmark-label');
//console.log(allBookmarks);
allBookmarks.forEach(function (labelIcon){
    labelIcon.addEventListener('click', function () {
        //console.log(labelIcon.id);
        labelIcon.classList.toggle('bookmark-checked');
    });

});
 
