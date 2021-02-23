let contentEl = document.querySelector('#content');
let selectEl = document.createElement('select');
contentEl.appendChild(selectEl);
let pEl = document.createElement('p');
contentEl.appendChild(pEl);

function listOfColours(colors) {
  for (let color of colors) {
    let optionEl = document.createElement('option');
    optionEl.innerText = `${color}`;
    optionEl.addEventListener('click', function () {
      pEl.innerText = `You have selected: ${color}`;
      pEl.style.color = `${color}`;
    })
    selectEl.appendChild(optionEl);
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
