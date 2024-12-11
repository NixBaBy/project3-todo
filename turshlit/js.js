let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];

const button = document.getElementById("button");
const input = document.getElementById("input");
function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  todos.map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo;
    tasklist.appendChild(p);
  });
}
renderTodos();
button.addEventListener("click", () => {
  todos.push(input.value);
  renderTodos();
  input.value = null;
});
