
const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createTask(textInput) {
    const li = createLi();
    // console.log(textInput)
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createClearButton(li)
    saveTask();
}

function createClearButton(li) {
    li.innerText += ' '
    const clearButton = document.createElement('button');
    clearButton.innerText = 'Clear';
    clearButton.setAttribute('class', 'clear')
    clearButton.setAttribute('title', 'Clear this task')
    li.appendChild(clearButton);
}



function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const listTasks = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Clear', '').trim();
        listTasks.push(taskText)
    }
    const taskJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', taskJSON);
    console.log(listTasks)
}

function readTasks() {
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);
    for (let task of listTasks) {
        createTask(task)
    }
}


inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnTask.addEventListener('click', function (e) {
    if (!inputTask.value) return;
    // console.log(inputTask.value);
    createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('clear')) {
        el.parentElement.remove();
        saveTask();
    }
});
readTasks();