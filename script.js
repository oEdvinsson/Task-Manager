const saveTaskBtn = document.querySelector('.save-task-button');
const addTask = document.getElementById('add-task');
const dayTime = document.getElementById('day-time');
const taskContainer = document.querySelector('.task-container');

const today = new Date().toISOString().split('T')[0];
dayTime.setAttribute('min', today);
let taskExist = false;

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
    if (!taskContainer.children[0]) {
        taskExist = false;
    }
    if (addTask.value && dayTime.value && !taskExist) {
    taskExist = true;
    // Create main div
    const div = document.createElement('div');
    div.classList.add('task');
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
    time.textContent = dayTime.value;
    //Add task and time to div
    headings.appendChild(task);
    headings.appendChild(time);
    // Add headings and cross to div and append to taskContainer
    div.appendChild(headings);
    div.appendChild(cross);
    taskContainer.appendChild(div);
    init();
    }
});

init();