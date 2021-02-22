let content = document.querySelector('#content');
let h1El = document.createElement('h1');
h1El.innerHTML = 'Books';
let ulEl = document.createElement('ul');
ulEl.style.display = 'flex';
content.appendChild(h1El);
content.appendChild(ulEl);

let imgSources = [
  'https://m.media-amazon.com/images/I/51Dl6lXXesL._SL210_.jpg',
  'https://images.booksense.com/images/708/476/9780307476708.jpg',
  'https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg'
]

function readingList(books) {
  let i = 0;
  for (let book of books) {
    let liEl = document.createElement('li');
    liEl.style.listStyleType = 'none';
    liEl.style.padding = '10px';
    liEl.style.margin = '15px';
    let pEl = document.createElement('p');
    pEl.innerText = `${book.title} - ${book.author}`;
    liEl.appendChild(pEl);
    let imgEl = document.createElement('img');
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
    imgEl.src = imgSources[i];
    i++;
    if (book.alreadyRead === true) {
      liEl.style.backgroundColor = 'green';
    } else liEl.style.backgroundColor = 'red';
  }

}



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);