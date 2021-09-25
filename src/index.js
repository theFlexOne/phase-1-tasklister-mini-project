// Formatted with "Prettier"
document.addEventListener("DOMContentLoaded", () => {
  const todoFormHTML = document.querySelector("#createTaskForm");
  const newTodoBar = document.querySelector("#newTodoBar");

  newTodoBar.focus();

  todoFormHTML.addEventListener("submit", e => {
    if (!newTodoBar.value) alert("Please enter task first");
    else {
      const todoListHTML = document.querySelector("#todoList");
      const newTodo = document.createElement("div");
      const newTodoHTMLString = `<span class="material-icons-outlined bullet-icon">arrow_forward_ios</span> ${newTodoBar.value}</div>`;
      newTodo.setAttribute("class", "todo-item");
      newTodo.innerHTML = newTodoHTMLString;
      const bulletIcon = newTodo.childNodes[0];
      newTodo.onmouseover = () =>
        (bulletIcon.innerHTML = bulletIcon.innerHTML.replace(
          "arrow_forward_ios",
          "remove_circle_outline"
        ));
      newTodo.onmouseleave = () =>
        (bulletIcon.innerHTML = bulletIcon.innerHTML.replace(
          "remove_circle_outline",
          "arrow_forward_ios"
        ));
      bulletIcon.onmouseup = () =>
        confirm("Are you sure you want to remove this task?")
          ? newTodo.remove()
          : alert("You pressed 'cancel'");
      todoListHTML.appendChild(newTodo);
    }
    e.preventDefault();
    e.target.reset();
  });
});
