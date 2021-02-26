let list = document.getElementById("todo-list");

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let to of todos) {
    let liEl = document.createElement('li');
    liEl.className = 'list-group-item d-flex justify-content-between align-items-center';
    liEl.innerText = `${to.task}`;
    list.appendChild(liEl);
    let spEl = document.createElement('span');
    liEl.appendChild(spEl);
    spEl.className = 'badge bg-primary rounded-pill';
    let checkEl = document.createElement('i');
    checkEl.className = 'fa fa-check';
    let delEl = document.createElement('i');
    delEl.className = 'fa fa-trash';
    spEl.appendChild(checkEl);
    spEl.appendChild(delEl);
    checkEl.addEventListener('click', function () {
      if (liEl.style.textDecoration === '') {
        liEl.style.textDecoration = 'line-through';
      } else liEl.style.textDecoration = '';
    });
    delEl.addEventListener('click', function () {
      liEl.remove();
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let inputEl = document.querySelector('#todoInput');
  let toEl = [{ task: inputEl.value, completed: false }];
  if (inputEl.value) {
    populateTodoList(toEl);
    inputEl.value = '';
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let listEl = document.querySelectorAll('li');
  for (let li of listEl) {
    if (li.style.textDecoration === 'line-through') {
      li.remove();
    }
  }
}
