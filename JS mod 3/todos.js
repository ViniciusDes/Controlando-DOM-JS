var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = [
    'Fazer cafe',
    'Estudar JavaScript',
    'Acessar comunidade Rocketseat'
];

function renderTodos(){
    listElement.innerHTML = '';


    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodo(){
    var textTodo = inputElement.value;
    todos.push(textTodo);
    inputElement = '';
    renderTodos();

}
buttonElement.onclick = addTodo;
