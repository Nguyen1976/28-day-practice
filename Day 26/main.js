var input = document.querySelector('input');
var eye = document.querySelector('.form-input i');
var lowercase = document.querySelector('.lowercase');
var uppercase = document.querySelector('.uppercase');
var number = document.querySelector('.number');
var symbol = document.querySelector('.symbol');
var characters = document.querySelector('.characters');


eye.addEventListener('click', function() {
    if(this.classList.contains('fa-eye')) {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
    input.getAttribute('type') === 'text' 
    ? input.setAttribute('type', 'password') 
    : input.setAttribute('type', 'text')
})

input.addEventListener('input', function() {
    let val = this.value.trim();
    /[a-z]/.test(val) ? lowercase.classList.add('valid') : lowercase.classList.remove('valid');
    /[A-Z]/.test(val) ? uppercase.classList.add('valid') : uppercase.classList.remove('valid');
    /[0-9]/.test(val) ? number.classList.add('valid') : number.classList.remove('valid');
    /[\W]/.test(val) ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    val.length >= 8 ?  characters.classList.add('valid') : characters.classList.remove('valid');
})