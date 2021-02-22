function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let obj of people) {
    let h1El = document.createElement('h1');
    h1El.innerText = `${obj.name}`;
    let h2El = document.createElement('h2');
    h2El.innerText = `${obj.job}`;
    content.appendChild(h1El);
    content.appendChild(h2El);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
