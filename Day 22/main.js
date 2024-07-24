// var btnList = document.querySelectorAll('button')
// var imgList = document.querySelectorAll('.food-item')

// btnList.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         let type = e.target.getAttribute('type-food');
    
//         btnList.forEach(btn => {
//             if(btn.getAttribute('type-food') === type) {
//                 btn.classList.add('active');
//             } else {
//                 btn.classList.remove('active');
//             }
//         })

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