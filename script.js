{
  /* <div class="todoList">
        <div class="title">
          <div class="circle"></div>
          <h2>To do</h2>
          <p class="count">5</p>
        </div>
        <div class="list">
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
        </div>
      </div> */
}

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

const todoData = [
  {
    tittle: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    tittle: "Shine jildee yvah",
    date: "2024-12-09",
    state: "todo",
  },
  {
    tittle: "Huvtssaa beldeh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    tittle: "Geree tseverleh",
    date: "2024-12-09",
    state: "in-progress",
  },
  {
    tittle: "Shine jildee yvah",
    date: "2024-12-09",
    state: "in-progress",
  },
  {
    tittle: "Uheh",
    date: "2024-12-09",
    state: "done",
  },
  {
    tittle: "Uheh",
    date: "2024-12-09",
    state: "done",
  },
  {
    tittle: "Uheh",
    date: "2024-12-09",
    state: "blocked",
  },
  {
    tittle: "Uheh",
    date: "2024-12-09",
    state: "blocked",
  },
];

function addTaskList(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  const count1 = document.createElement("p");
  count1.setAttribute("class", "count");
  count1.innerText = count;
  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(count1);
  taskContainer2.appendChild(todoList);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});

const todo = (tittle, date, state) => {
  // listdiv
  const todo1 = document.querySelector(`#${state}`);
  const listDiv = document.createElement("div");
  listDiv.setAttribute("class", "list");
  todo1.appendChild(listDiv);
  // listdiv dotrh list item
  const listItemDiv = document.createElement("div");
  listItemDiv.setAttribute("class", "listItem");
  listDiv.appendChild(listItemDiv);
  // listitem p
  const p = document.createElement("p");
  p.innerText = tittle;
  listItemDiv.appendChild(p);
  // listitem date
  const p1 = document.createElement("p");
  p1.innerText = date;
  listItemDiv.appendChild(p1);
  // listItem select
  const select = document.createElement("select");
  listItemDiv.appendChild(select);
  // listitem -> select -> option
  const option = document.createElement("option");
  option.innerText = state;
  select.appendChild(option);
  containerItems.map((arr) => {
    if (arr.id != state) {
      const option = document.createElement("option");
      option.innerText = arr.id;
      select.appendChild(option);
    }
  });
  // listitem -> img
  const img = document.createElement("img");
  img.setAttribute("src", "./trash.svg");
  listItemDiv.appendChild(img);
};
todoData.map((doto) => {
  todo(doto.tittle, doto.date, doto.state);
});
const button = document.getElementById("button");
const input = document.getElementById("input");

const addTask = () => {
  const tasklist = document.getElementById("todo");
  todoData.map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo;
    tasklist.appendChild(p);
  });
};
// addTask();
button.addEventListener("click", () => {
  const tasklist = document.getElementsByClassName("todoList");
  console.log(tasklist);
  todoData.push({ tittle: input.value, date: "2024", state: "todo" });
  console.log(todoData);
  tasklist[0].innerHTML = null;
  tasklist[1].innerHTML = null;
  tasklist[2].innerHTML = null;
  tasklist[3].innerHTML = null;
  todoData.map((doto) => {
    todo(doto.tittle, doto.date, doto.state);
  });
  input.value = null;
});
