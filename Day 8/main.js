var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');


function showErrer(input, error) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error');
    small.innerText = error;
}

function showSuccess(input, success) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value) {
            isEmptyError = true;
            showErrer(input, 'Khong duoc de trong');
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;//Có lỗi trả về true

}

function checkEmailError(input) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    
    let isEmailError = !regex.test(input.value);

    if(regex.test(input.value)) {
        showSuccess(input);
    } else {
        showErrer(input, 'Email khong dung dinh dang');
    }

    return isEmailError;//có lỗi trả về true
}

function checkLanghtError(input, min, max) {
    input.value = input.value.trim();
    if(input.value.length < min) {
        showErrer(input, `Phai co it nhat ${min} ky tu`);
        return true;
    }

    if(input.value.length > max) {
        showErrer(input, `Khong duoc vuot qua ${max} ky tu`);
        return true
    }

    showSuccess(input);

    return false;
}

function checkMatchPassword(passwordInput, cfPasswordInput) {
    if(passwordInput.value.trim() === cfPasswordInput.value.trim()) {
        showSuccess(cfPasswordInput);
        return false;
    } else {
        showErrer(cfPasswordInput, 'Password khong giong nhau');
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();//Chặn hành vi load trang

    

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLangthError = checkLanghtError(username, 6, 12);
    let isPasswordLengthError = checkLanghtError(password, 8, 16);
    let isPasswordMatchError = checkMatchPassword(password, confirmPassword);

    if(isEmptyError || isEmailError || isUsernameLangthError || isPasswordLengthError || isPasswordMatchError) {
        //do nothing
    } else {
        //logic VD call API các thứ
    }
})