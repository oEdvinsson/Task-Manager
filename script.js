const saveTaskBtn = document.querySelector('.save-task-button');
const addTask = document.getElementById('add-task');
const dayTime = document.getElementById('day-time');
const taskContainer = document.querySelector('.task-container');
const checkBox = document.getElementById('check-box');
const addTaskContainer = document.querySelector('.add-task-container');
const closeBtn = document.querySelector('.close-button');

const today = new Date().toISOString().split('T')[0];
dayTime.setAttribute('min', today);
let taskExist = false;
let isVisible = true;

function init() {
    const crossBtns = document.querySelectorAll('.fa-xmark');
    crossBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            const task = e.target.closest('.task');
            if (task) {
                task.remove(); // Remove the task from the DOM
            }
        })
    })
}


addTask.addEventListener('input', function() {
    taskExist = false;
});

saveTaskBtn.addEventListener('click', function() {
    // dateFormatter(dayTime.value)
    if (!taskContainer.children[0]) {
        taskExist = false;
    }
    if (addTask.value && dayTime.value && !taskExist) {
    taskExist = true;
    // Create main div
    const div = document.createElement('div');
    div.classList.add('task');
    if (checkBox.checked) {
        div.classList.add('green-border');
    }
    // Create headings div
    const headings = document.createElement('div');
    headings.classList.add('push-x');
    // Create cross div
    const cross = document.createElement('div');
    const i = document.createElement('i');
    i.classList.add("fa-solid", "fa-xmark");
    cross.appendChild(i);
    // Create task
    const task = document.createElement('h3');
    task.textContent = addTask.value.charAt(0).toUpperCase() + addTask.value.slice(1);
    // Create day & time
    const time = document.createElement('h5');
    time.textContent = dayTime.value.replace('T', ' ');
    //Add task and time to div
    headings.appendChild(task);
    headings.appendChild(time);
    // Add headings and cross to div and append to taskContainer
    div.appendChild(headings);
    div.appendChild(cross);
    taskContainer.appendChild(div);
    checkBox.checked = false;
    init();
    }
});

closeBtn.addEventListener('click', () => {
    if (isVisible) {
        addTaskContainer.style.display = 'none';
        closeBtn.style.backgroundColor = 'rgba(45, 122, 17, 0.683)';
        closeBtn.textContent = 'Add Task';
        taskContainer.style.minHeight = '596px';
    } else {
        addTaskContainer.style.display = 'block';
        closeBtn.style.backgroundColor = 'rgba(239, 49, 49, 0.825)';
        closeBtn.textContent = 'Close';
        taskContainer.style.minHeight = '350px';
    }
    isVisible = !isVisible;
});

init();