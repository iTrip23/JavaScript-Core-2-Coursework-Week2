//Part 1

let jumboEl = document.querySelector('.jumbotron');
let donateEl = document.querySelector('#donate');
let volunteerEl = document.querySelector('#volunteer')
let blueBtnEl = document.querySelector('#blueBtn');
let orangeBtnEl = document.querySelector('#orangeBtn');
let greenBtnEl = document.querySelector('#greenBtn');

blueBtnEl.addEventListener('click', function () {
    jumboEl.style.backgroundColor = `#588fbd`;
    donateEl.style.backgroundColor = `#ffa500`;
    volunteerEl.style.backgroundColor = `black`;
    volunteerEl.style.color = `white`;
});

orangeBtnEl.addEventListener('click', function () {
    jumboEl.style.backgroundColor = `#f0ad4e`;
    donateEl.style.backgroundColor = `#5751fd`;
    volunteerEl.style.backgroundColor = `#31b0d5`;
    volunteerEl.style.color = `white`;
});

greenBtnEl.addEventListener('click', function () {
    jumboEl.style.backgroundColor = `#87ca8a`;
    donateEl.style.backgroundColor = `black`;
    volunteerEl.style.backgroundColor = `#8c9c08`;
});

//Part 2

let submitEl = document.querySelector('form button');
let emailEl = document.querySelector('#exampleInputEmail1');
let nameEl = document.querySelector('#example-text-input');
let textEl = document.querySelector('#exampleTextarea');

submitEl.addEventListener('click', function (event) {
    if (nameEl.value.length === 0) {
        nameEl.style.backgroundColor = 'red';
    }
    if (textEl.value.length === 0) {
        textEl.style.backgroundColor = 'red';
    }
    if (emailEl.value.length === 0 && !(/[@]/.test(emailEl.value))) {
        emailEl.style.backgroundColor = 'red';
    } else {
        window.alert('Thank you for filling out the form!');
        emailEl.value = '';
        nameEl.value = '';
        textEl.value = '';
    }
    event.preventDefault();
});
