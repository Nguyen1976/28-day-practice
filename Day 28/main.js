const img = document.querySelector('.img')
const title = document.querySelector('.content__title')
const text = document.querySelector('.content__text')
const button = document.querySelector('button')
const content = document.querySelector('.content')
const container = document.querySelector('.container')

setTimeout(() => {
    content.style.color = '#000';
    img.querySelector('img').src = './img.avif'
    button.style.color = '#fff';

    container.classList.remove('loading');
}, 3000)