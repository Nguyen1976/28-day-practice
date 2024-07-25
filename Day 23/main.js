// var result = document.querySelector('#result')

// document.addEventListener('mousemove', function(e) {
//     result.style.top = e.clientY + 'px';
//     result.style.left = e.clientX + 'px';
// })

var img = document.querySelector('img');
var mirror = document.querySelector('#mirror');
img.addEventListener('mousemove', function(e) {
    let w = this.offsetWidth;
    let h = this.offsetHeight;

    let mouseWithImgBorderX = e.pageX - this.offsetLeft;
    let mouseWithImgBorderY = e.pageY - this.offsetTop;

    let percenMouseByW = (mouseWithImgBorderX / w) * 100;
    let percenMouseByH = (mouseWithImgBorderY / h) * 100;

    mirror.style.backgroundPosition = `${percenMouseByW}% ${percenMouseByH}%`;
})

document.addEventListener('mousemove', function(e) {
    mirror.style.top = e.clientY + 'px';
    mirror.style.left = e.clientX + 'px';
})
