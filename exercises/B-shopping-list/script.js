function shoppingList(arrayOfPeople) {
  let content = document.querySelector('#content');
  let ulEl = document.createElement('ul');
  content.appendChild(ulEl);
  for (let items of arrayOfPeople) {
    let listEl = document.createElement('li');
    listEl.innerHTML = `${items}`;
    ulEl.appendChild(listEl);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
