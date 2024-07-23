const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const checkbox = $('input[type="checkbox"]');
const label = $('label');
const body = $('body');
var isCheckbox = false;

label.addEventListener('click', function(e) {
    handleCheckbox();
    save();
})

function handleCheckbox() {
    if (checkbox.checked) {
        body.classList.add('dark');
        isCheckbox = true;
    } else {
        body.classList.remove('dark');
        isCheckbox = false;
    }
}


function save() {
    localStorage.setItem('checkbox', JSON.stringify(isCheckbox));
}

function init() {
    const data = JSON.parse(localStorage.getItem('checkbox'));
    if (data !== null) {
        isCheckbox = data;
        checkbox.checked = isCheckbox;
    }
    handleCheckbox();
}

init();