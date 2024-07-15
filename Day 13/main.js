var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');
upload.addEventListener('change', function(e) {
    var img = document.createElement('img');
    var file = this.files[0];

    if(!file) {
        return;
    }
    //Nếu đuôi file không kết thúc bằng jpg 
    if(file.name.endsWith('.jpg')) {
        error.innerText = 'Hình ảnh phải ở dạng jpg';
        return;
    } else {
        error.innerText = '';
    }

    if(file.size / 1024 * 1024 > 5) {
        error.innerText = 'Hình không được vượt quá 5MB';
        return;
    } else {
        error.innerText = '';
    }

    img.src = URL.createObjectURL(file);//nó là 1 cái blob nó chỉ đến 1 cái nội dung 1 cái tài nguyên trong máy tính của mình
    preview.appendChild(img);
})