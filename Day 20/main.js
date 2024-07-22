var p = document.querySelector('.typing-wrapper p');
var originContent = p.innerHTML;
var index = 0;
var isForward = true;

setInterval(() => {
    if(isForward) {
        index++;
        if(index >= originContent.length) {
            isForward = false;
        }
    }else {
        index -= 2;
        if(index <= 0) {
            isForward = true;
        }
    }
    p.innerHTML = originContent.substring(0, index)
}, 100)