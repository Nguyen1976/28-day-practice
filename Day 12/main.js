var process = document.querySelector('.process');
var range = document.querySelector('.range');
var body = document.querySelector('body');
var persentElement = document.querySelector('.process span');

// range.addEventListener('mouseup', function(e) {
//     //offsetLeft là lấy ra trí của thằng range so với lề trái của trang web
//     var persent = ((e.pageX - this.offsetLeft) / 600) * 100;
//     process.style.width = (Math.round(persent)) + '%';
//     body.style.backgroundColor = `rgba(0, 0, 0, ${persent / 100})`;
//     persentElement.innerText = (Math.round(persent)) + '%';
// });


var input = document.querySelector('#slider');
input.addEventListener('input', function(e) {
    var persent = e.target.value;
    console.log(persent);
    body.style.backgroundColor = `rgba(0, 0, 0, ${persent / 100})`;
});