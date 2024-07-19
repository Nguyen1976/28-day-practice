var listCounter = document.querySelectorAll('.counter')


function count(el) {
    var to = parseInt(el.querySelector('.number').innerText);
    var count = 0;
    var text = el.querySelector('h2');

    var time = 1000;
    var step = to / time;

    let counting = setInterval(() => {
        count += step;
        if(count > to) {
            clearInterval(counting);
            text.innerText = to;
        } else {
            text.innerText = Math.round(count);
        }
    }, 1)
}

listCounter.forEach((el) => {
    count(el);
})