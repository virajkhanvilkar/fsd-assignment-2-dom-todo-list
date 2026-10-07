const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");

    span.textContent = taskText;
    span.classList.add("task-text");

    // Mark as done by clicking task
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Important button
    const importantButton = document.createElement("button");

    importantButton.textContent = "⭐ Important";
    importantButton.classList.add("important-btn");

    importantButton.addEventListener("click", function () {
        li.classList.toggle("important");
    });

    // Done button
    const doneButton = document.createElement("button");

    doneButton.textContent = "✓ Done";
    doneButton.classList.add("done-btn");

    doneButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Buttons container
    const buttons = document.createElement("div");

    buttons.classList.add("buttons");

    buttons.appendChild(importantButton);
    buttons.appendChild(doneButton);
    buttons.appendChild(deleteButton);

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(buttons);

    // Check initial priority
    if (priority.value === "important") {
        li.classList.add("important");
    }

    // Add task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";

    taskInput.focus();
}