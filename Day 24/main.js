var container = document.querySelector('.container');


for(let i = 0; i < 200; i++) {
    var square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.addEventListener('mouseenter', function(e) {
        let el = e.currentTarget;
        let color = setColor();
        el.style.backgroundColor = `${color}`;
        el.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`
        
    })
    square.addEventListener('mouseleave', function(e) {
        let el = e.currentTarget;
        setTimeout(function() {
            el.style.backgroundColor = '';
            el.style.boxShadow = ''
        }, 1000);

    })
}

function setColor() {
    var charColor = '0123456789ABCDEF';
    var color = '#';
    for(let i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * 16)];
    }
    return color;
}