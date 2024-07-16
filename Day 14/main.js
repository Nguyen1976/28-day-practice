var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image img');
var prevBtn = document.querySelector('.control.prev');
var nextBtn = document.querySelector('.control.next');

var currenIndex = 0;
console.log(listImg.length)
function updateImageByIndex(index) {
    //remove active class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active');
    })
    currenIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[currenIndex].parentElement.classList.add('active');

}
listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0';
        
        setTimeout(() => {
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 400)
    })
})

prevBtn.addEventListener('click', e => {
    if(currenIndex == 0) {
        currenIndex = listImg.length - 1;
    } else {
        currenIndex--;
    }
    imgFeature.style.animation = '';
    setTimeout(() => {
        imgFeature.style.animation = 'slideRight 1s ease-in-out forwards';
        updateImageByIndex(currenIndex)
    }, 200) 
   
    
    
})


nextBtn.addEventListener('click', e => {
    if(currenIndex == listImg.length - 1) {
        currenIndex = 0;
    } else {
        currenIndex++;
    }

    imgFeature.style.animation = '';
    setTimeout(() => {
        imgFeature.style.animation = 'slideLeft 1s ease-in-out forwards';
        updateImageByIndex(currenIndex)
    }, 200)
})
updateImageByIndex(0);