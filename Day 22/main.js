// var btnList = document.querySelectorAll('button')
// var imgList = document.querySelectorAll('.food-item')

// btnList.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         let type = e.target.getAttribute('type-food');
    
        // btnList.forEach(btn => {
        //     if(btn.getAttribute('type-food') === type) {
        //         btn.classList.add('active');
        //     } else {
        //         btn.classList.remove('active');
        //     }
        // })

//         imgList.forEach(img => {
//             let foodType = img.getAttribute('type-food');
//             if(type === 'all') {
//                 img.classList.remove('hide');
//             } else if (type !== 'all') {
//                 if(foodType === type) {
//                     img.classList.remove('hide');
//                 } else {
//                     img.classList.add('hide');
//                 }
//             }
//         })
//     })
// })

var btnList = document.querySelectorAll('button')
var imgList = document.querySelectorAll('img')

var arr = [];
imgList.forEach(item => {
    arr.push({
        src: item.getAttribute('src'),
        foodType: item.parentElement.getAttribute('type-food')
    })
})

btnList.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let type = e.target.getAttribute('type-food');
        btnList.forEach(btn => {
            if(btn.getAttribute('type-food') === type) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        })
        render(type);
    })
})

function render(type) {
    var html = arr.map(item => {
        if(item.foodType === type || type === 'all') {
            return `
                <div class="food-item" type-food="${item.foodType}">
                    <img src="${item.src}" alt="">
                </div>
            `
        }
    }).join(' ');
    document.querySelector('.food-list').innerHTML = html;
}
console.log(arr)