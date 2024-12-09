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

    id: "toddo",
  },
  {
    title: "In progress",
    count: 2,
    color: "yellow",

    id: "in progress",
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
  const todo1 = document.querySelector("#toddo");
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
  select.appendChild(option);
  const option1 = document.createElement("p");
  option1.innerText = state;
  option.appendChild(option1);
  // listitem -> select option2
  const option2 = document.createElement("option");
  option2.innerText = "in Progress";
  select.appendChild(option2);
  const option3 = document.createElement("p");
  option3.innerText = "in Progress";
  select.appendChild(option3);
  // listitem -> img
  const img = document.createElement("img");
  img.setAttribute("src", "./trash.svg");
  listItemDiv.appendChild(img);
};
todoData.map((doto) => {
  todo(doto.tittle, doto.date, doto.state);
});
