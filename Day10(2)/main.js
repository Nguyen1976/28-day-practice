var btn = document.querySelector('button');
var todos = document.querySelector('.todos');
var input = document.querySelector('input');
var formElement = document.querySelector('form');

//tạo 1 hàm addTodoElement đối số là 1 object như dưới
//xử lý hàm
//Tại 1 hàm để save những todo hiện có vào trong 1 mảng tạo thành 1 mảng object
//Dùng localstorage và JSON để lưu giữ liệu lên local storage


/*
            text: text,
            status: status
*/

function addTodoElement(todo) {
    var li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash-can"></i>
    `;
    li.setAttribute('class', '');
    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
        saveTodoList();
    })
    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTodoList();
    })

    todos.appendChild(li);
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    var val = input.value.trim();
    if(val) {
        addTodoElement({
            text: val
        });
        saveTodoList();
    }
    input.value = '';
})

function saveTodoList() {
    var todoList = document.querySelectorAll('li');
    var todoStorage = [];
    //Ý tưởng: lặp qua tất cả các todolist lấy ra trạng thái và value rồi lưu vào storage
    todoList.forEach(function(item) {
        var text = item.querySelector('span').innerText;
        var status = item.getAttribute('class')
        console.log(text);
        todoStorage.push({
            text: text,
            status: status
        })
    })
    localStorage.setItem('totolist', JSON.stringify(todoStorage));
}

function init() {
    var data = JSON.parse(localStorage.getItem('totolist'));
    data.forEach(function(item) {
        addTodoElement(item)
    })
}

init();



