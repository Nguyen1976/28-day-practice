var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');
var toasts = document.querySelector('#toasts')
var btn = document.querySelectorAll('.control button');
console.log(btn)


// btn.addEventListener('click', function() {
//     this.forEach(function(item) {
//         console.log(item);
//     })
//     // let elementoast = creatToast('success');
//     // removeToast(elementoast);
// });

function handleEvent() {
    btn.forEach((item, index) => {
        item.addEventListener('click', function() {
            switch (index) {
                case 0:
                    elementoast = creatToast('success');
                    removeToast(elementoast);
                    break;
                case 1:
                    elementoast = creatToast('warning');
                    removeToast(elementoast);
                    break;
                case 2:
                    elementoast = creatToast('error');
                    removeToast(elementoast);
                    break;
                default:
                    console.error('Invalid index');
                    return;
            }
        })
    })
}

function creatToast(status) {
    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i>
                        <span>This is a success message</span>
                        <div class="countdown"></div>`
                        
    toasts.appendChild(toast);
    setTimeout(function() { 
        toast.querySelector('.countdown').style.animation = 'countdown 3s linear forwards';//Tức là sau khi hiện ra thì down mới bắt đầu chạy
    }, 1500)
    return toast;
}

function removeToast(toast) {
    setTimeout(function() {
        toast.style.animation = 'hide_slide 1.5s ease-out forwards';
    }, 4500)
    setTimeout(function() {
        toast.remove();
    }, 6000)
}

handleEvent();