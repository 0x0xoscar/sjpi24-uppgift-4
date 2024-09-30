const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoUl = document.querySelector("#todoUl");
const completedTasks = document.querySelector("#completedTasks");
const errorMsg = document.querySelector("#errorMsg");

let completedCount = 0;
const todoArr = [];

addTodoBtn.addEventListener("click", function () {

    // Input validation
    if (todoInput.value === "") {
        errorMsg.textContent = "Input can't be empty.";
        return;
    } else {
        errorMsg.textContent = "";
    }

    const li = document.createElement("li");

    // Create a span for the todo text
    const span = document.createElement("span");
    span.textContent = todoInput.value;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#128465;";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.color = "#a3b18a";
    deleteBtn.style.backgroundColor = "#3a5a40";
    deleteBtn.style.border = "solid 1px black";


    todoInput.value = "";

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoUl.appendChild(li);
    todoArr.push(span.textContent);

    li.addEventListener("click", function () {
        if (li.classList.contains("completed")) {
            li.classList.remove("completed");
            completedCount--;
        } else {
            li.classList.add("completed");
            completedCount++;
        }
        completedTasks.textContent = `Completed Tasks: ${completedCount}`;
    });

    deleteBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();

        const index = todoArr.indexOf(span.textContent);
        if (index > -1) {
            todoArr.splice(index, 1);
        }

        if (li.classList.contains("completed")) {
            completedCount--;
            completedTasks.textContent = `Completed Tasks: ${completedCount}`;
        }
    });
});
