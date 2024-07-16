
//tạo 1 hàm addTodoElement đối số là 1 object như dưới
//xử lý hàm
//Tại 1 hàm để save những todo hiện có vào trong 1 mảng tạo thành 1 mảng object
//Dùng localstorage và JSON để lưu giữ liệu lên local storage


/*
            text: text,
            status: status
*/
const ul = document.querySelector('.todos');

function addTodoElement(todo) {
    let li = document.createElement('li');
    li.setAttribute('class', '');
    li.innerHTML = `
                 <span>${todo.text}</span>
                <i class="fa-solid fa-trash-can"></i>
                            `;


    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed');
        saveTodo();
    }   
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        saveTodo();
    })
    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTodo();
    })
    ul.appendChild(li);
}

document.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent
    let input = document.querySelector('input');
    let text = input.value;
    if(text) {
        addTodoElement({
            text
        })
        input.value = '';
        saveTodo();
    }
})

function saveTodo() {
    let todoList = ul.querySelectorAll('li');
    let todoStorages = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerText;
        let status = item.classList.contains('completed') ? 'completed' : '';
        let todo = {
            text,
            status
        }
        todoStorages.push(todo);
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorages));
}



function init() {
    var todoStorage = JSON.parse(localStorage.getItem('todoList'));
    if(todoStorage) {
        todoStorage.forEach(function(todo) {
            addTodoElement(todo);
        })
    }
}

init();