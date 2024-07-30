const img = document.querySelector('.img')
const title = document.querySelector('.content__title')
const text = document.querySelector('.content__text')
const button = document.querySelector('button')
const content = document.querySelector('.content')

setTimeout(() => {
    content.style.color = '#000';
    img.querySelector('img').src = './img.avif'
    button.style.color = '#fff';

    img.classList.remove('loading')
    title.classList.remove('loading')
    text.classList.remove('loading')
    button.classList.remove('loading')
}, 4000)