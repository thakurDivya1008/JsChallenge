const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
let tasks = [];

taskForm.onsubmit = handleFormSubmit;

function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = { title, description, dueDate };
    tasks.push(task);

    displayTasks();
    taskForm.reset();
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(function(task, index) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <strong>${task.title}</strong><br>
            ${task.description}<br>
            <small>Due: ${task.dueDate}</small>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;

    taskForm.onsubmit = function(e) {
        e.preventDefault();
        task.title = document.getElementById('title').value;
        task.description = document.getElementById('description').value;
        task.dueDate = document.getElementById('due-date').value;
        displayTasks();
        taskForm.reset();
        taskForm.onsubmit = handleFormSubmit;
    };
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
