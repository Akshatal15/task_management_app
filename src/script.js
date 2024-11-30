let tasks = [];

function renderTasks() {
  const taskContainer = document.getElementById("tasks");
  taskContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    taskContainer.innerHTML += `
      <div class="task">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>`;
  });
}

function addTask() {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;

  if (title && description) {
    tasks.push({ title, description });
    renderTasks();
  } else {
    alert("Please fill out all fields.");
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
