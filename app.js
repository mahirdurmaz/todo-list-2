const todoInput = document.getElementById("input"); // <input>
const addBtn = document.getElementById("btn-add"); // ekleme butonu
const todoList = document.getElementById("todo-list"); // <ul> seçildi

function addTask(event) {
  event.preventDefault();

  const task_el = document.createElement("li");
  const task_input = document.createTextNode(todoInput.value);

  currDate = new Date();
  hours = currDate.getHours();
  minutes = currDate.getMinutes();

  let newMin = "";
  minutes < 10
    ? (newMin = "0" + minutes.toString())
    : (newMin = minutes.toString());

  const time_and_del = document.createElement("span");
  const currTime = document.createTextNode(hours.toString() + ":" + newMin);

  const delIcon = document.createElement("i");
  delIcon.classList.add("fa-trash");
  delIcon.classList.add("fa-light");

  time_and_del.appendChild(delIcon);
  time_and_del.appendChild(currTime);

  task_el.appendChild(task_input);
  task_el.appendChild(time_and_del);
  task_el.style.animation = "appear .2s";

  todoList.appendChild(task_el);

  todoInput.value = "";

  task_el.addEventListener("click", function () {
    task_el.classList.toggle("li-checked");
  });

  delIcon.addEventListener("click", function (e) {
    const item = e.target;
    const todo = item.parentElement.parentElement;
    todo.classList.add("disappear");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  });
}

addBtn.addEventListener("click", addTask);
