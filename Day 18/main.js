var boxes = document.querySelectorAll('.box');
var targetList = document.querySelectorAll('.target');

//dragover
//drop

var currentTarget = null;

targetList.forEach(target => {
    target.addEventListener('dragstart', function(e){
        this.classList.add('dragimg');
        currentTarget = this;
    })
    
    target.addEventListener('dragend', function(e){
        this.classList.remove('dragimg');
    })
})


boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    })
    box.addEventListener('drop', function(e) {
        if(!box.querySelector('.target')) {
            this.appendChild(currentTarget);
        }
    })
});