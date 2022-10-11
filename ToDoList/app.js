var input =document.querySelector('input')
var button = document.querySelector('button')
var form = document.querySelector('form')
var todo = document.querySelector('.todo')

form.addEventListener('submit', function(event){
    event.preventDefault();
    let val = input.value.trim();
    if(val){
          
        addTodoElement({
            text: val,
        })   
        saveTodoList() 
    }
    input.value = ' '
})

function addTodoElement(todos){
    // {
        // text:
        // status   
    // }
    var li = document.createElement('li')
    li.innerHTML = `
                <span>${todos.text}</span>
                <i class="fa-solid fa-trash"></i>
    `
    if(todos.status === 'completed'){
        li.setAttribute('class', 'completed')

    }
    li.addEventListener('click', function(){
        this.classList.toggle('completed')
        saveTodoList();
    })
    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodoList();
    })
    todo.appendChild(li) 
    
}   

function saveTodoList(){
    let todoList = document.querySelectorAll('li');
    let todoStorage =  [];
    todoList.forEach((item) => {
        let text = item.querySelector('span').innerText
        let status = item.getAttribute('class')
        
        todoStorage.push({
            text: text,
            status: status
        })
    })
    localStorage.setItem('todolist', JSON.stringify(todoStorage))
    console.log();
}
function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach((item) => {
        addTodoElement(item);
        console.log(item)
    })
}
init();