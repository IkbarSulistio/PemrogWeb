const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.classList.add('edit-button');
    editButton.onclick = () => editTodo(taskSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => deleteTodo(todoItem);

    todoItem.appendChild(taskSpan);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

function editTodo(taskSpan) {
    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
    }
}

function deleteTodo(todoItem) {
    todoList.removeChild(todoItem);
}
