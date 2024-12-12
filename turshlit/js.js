const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",

    id: "todo",
  },
  {
    title: "In progress",
    count: 2,
    color: "yellow",

    id: "in-progress",
  },
  {
    title: "Done",
    count: 3,
    color: "green",

    id: "done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id: "blocked",
  },
];
{
  /* <div class="container">
<div class="container-top">
  <div class="circle"></div>
    <h2>To Do</h2>
  <div class="count">
    <p>5</p>
  </div>
</div>
<div class="hero-container">
  <div class="tittle">
    <p>geree tsewerleh</p>
  </div>
  <div class="date">2024-12-09</div>
  <div class="select">
    <select name="" id="">
      <option value="">To Do</option>
      <option value="">in-progress</option>
    </select>
  </div>
  <div class="trash">
    <p>x</p>
  </div>
</div>
</div> */
}
const addTaskList = (tittle, color, id, count) => {
  const taskContainer = document.querySelector(".task-container");

  const container = document.createElement("div");
  container.setAttribute("class", "container");
  taskContainer.appendChild(container);

  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todolist");
  container.appendChild(todoList);

  const circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  todoList.appendChild(circle);

  const h2 = document.createElement("h2");
  h2.innerText = "To Do";
  todoList.appendChild(h2);

  const count = document.createElement("div");
  count.setAttribute("class", "count");
  todoList.appendChild(count);
};
