var color = document.querySelector('#color');
var eraser = document.querySelector('#eraser');
var deccrease = document.querySelector('#deccrease');
var sizeElemnt = document.querySelector('#size');
var increase = document.querySelector('#increase');
var save = document.querySelector('#save');
var clear = document.querySelector('#clear');

let canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// ctx.beginPath();//tạo 1 đường dẫn mới bao gồm các đường thằng cong
// ctx.moveTo(0, 0);
// ctx.lineTo(100, 100);
// ctx.stroke();//vẽ đường kẻ
var size = 5;
sizeElemnt.innerText = size;

var pos1 = {
    x: 0,
    y: 0
}
var pos2 = {
    x: 0,
    y: 0
}

var isDrawing = false;
var colorPaint = '#000000';

canvas.addEventListener('mousedown', function(e) {
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true;
})

document.addEventListener('mousemove', function(e) {
    if(isDrawing) {   
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }

        ctx.beginPath();//tạo 1 đường dẫn mới bao gồm các đường thằng cong
        ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();


        ctx.beginPath();//tạo 1 đường dẫn mới bao gồm các đường thằng cong
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth = size * 2;
        ctx.stroke();//vẽ đường kẻ

        pos1.x = pos2.x;
        pos1.y = pos2.y;
    }
})

document.addEventListener('mouseup', function(e) {
    isDrawing = false;
})

color.addEventListener('change', function(e) {
    colorPaint = e.target.value;
})

eraser.addEventListener('click', function() {
    colorPaint = '#ffffff';
})

deccrease.addEventListener('click', function() {
    size -= 1;
    size = size > 5 ? size : 5;
    sizeElemnt.innerText = size;
})

increase.addEventListener('click', function() {
    size += 1;
    size = size < 30 ? size : 30;
    sizeElemnt.innerText = size;
})

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

save.addEventListener('click', function() {
    var output = canvas.toDataURL("image/png");
    save.setAttribute('href', output);
    save.click();
})

//init
