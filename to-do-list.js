function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const dueDateInput = document.getElementById("dueDateInput");
    const dueDate = dueDateInput.value;
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      const daysRemaining = getDaysRemaining(dueDate);
  
      li.innerHTML = `
        <div>
          <span>${taskText}</span>
          <span class="due-date">Due Date: ${dueDate}</span>
          <span class="days-remaining">${daysRemaining} days left</span>
        </div>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
      `;
  
      taskList.appendChild(li);
      taskInput.value = "";
      dueDateInput.value = "";
    }
  }
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  
  function getDaysRemaining(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
    return daysRemaining;
  }
  
