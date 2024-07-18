// API endpoint for fetched data
const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10";

// Selecting elements from the DOM
const inputButton = document.getElementById("input_button");
const myForm = document.getElementById("my_form");

// Fetch data from apiUrl
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((task) => {
      createTaskLi(task);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Function to create list of tasks added
function createTaskLi(task) {
  const list = document.createElement("li");
  list.textContent = task.title;

  const add = document.createElement("button");
  add.textContent = "Add";
  add.style.color = "blue";
  add.addEventListener("click", () => {
    addTask(task.title);
  });

  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.style.color = "red";
  remove.addEventListener("click", () => {
    list.remove();
  });

  const completed = document.createElement("button");
  completed.textContent = "Completed";
  completed.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
  });

  list.appendChild(add);
  list.appendChild(remove);
  list.appendChild(completed);

  document.querySelector("#list").appendChild(list);
}

// Function to add a new task
function addTask(task) {
  const list = document.createElement("li");
  list.textContent = task;

  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.style.color = "red";
  remove.addEventListener("click", () => {
    list.remove();
  });

  const completed = document.createElement("button");
  completed.textContent = "Completed";
  completed.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
  });

  list.appendChild(remove);
  list.appendChild(completed);

  document.querySelector("#list").appendChild(list);
}

// Event listener for adding a new task on form submission
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = inputButton.value.trim();
  console.log(taskText);
  if (taskText !== "") {
    addTask(taskText);
    inputButton.value = "";
  }
});

// Event listener for adding a new task on Enter key press
inputButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the form from submitting
    const taskText = inputButton.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      inputButton.value = "";
    }
  }
});
