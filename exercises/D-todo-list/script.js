let content = document.querySelector('#content');
let ulEl = document.createElement('ul');
ulEl.style.height = '100vh';
ulEl.style.display = 'flex';
ulEl.style.flexDirection = 'column';
ulEl.style.justifyContent = 'center';
ulEl.style.alignItems = 'center';
content.appendChild(ulEl);

function todoList(array) {
  for (let elem of array) {
    let liEl = document.createElement('li');
    liEl.style.listStyleType = 'none';
    liEl.innerText = `${elem.todo}`;
    liEl.style.display = 'block';
    liEl.style.padding = '5px';
    liEl.style.margin = '5px';
    liEl.style.width = '200px';
    liEl.style.cursor = 'pointer';
    liEl.style.textAlign = 'center';
    liEl.addEventListener('click', function (liEl) {
      liEl.target.classList.toggle('checked');
    });
    ulEl.appendChild(liEl);
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);