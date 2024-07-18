var animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationInWindow(element) {
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;

    if(!(rect.bottom < 0 || rect.top > heightScreen)) {
        //TH: bên trong màn hình
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}
function checkAnimation() {
    animationElements.forEach((el) => {
        toggleAnimationInWindow(el);
    })
}

window.onscroll = function() {
    checkAnimation();
}