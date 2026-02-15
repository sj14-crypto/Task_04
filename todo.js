let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function display() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, i) => {
        list.innerHTML += `
            <li>
                ${task}
                <span onclick="removeTask(${i})" style="cursor:pointer;">❌</span>
            </li>
        `;
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;
    tasks.push(input.value);
    input.value = "";
    save();
    display();
}

function removeTask(i) {
    tasks.splice(i, 1);
    save();
    display();
}

display();
