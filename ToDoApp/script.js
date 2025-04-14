document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("to-list");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex align-items-center justify-content-between"; // bootstrap styling
  li.innerHTML = `
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="todo-${Date.now()}">
        <label class="form-check-label">${taskText}</label>
      </div>
      <i class="bi bi-trash text-danger delete-icon" style="cursor: pointer;"></i>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
  taskInput.focus();

  // Delete a task

  document.getElementById("to-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-icon")) {
      e.target.closest("li").remove();
    }
  });
}
