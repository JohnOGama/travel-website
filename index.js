const btnEl = document.querySelector('.btn');
const closebtnEl = document.querySelector('.close-btn');
const backgroundEl = document.querySelector('.image-container');
const formEl = document.querySelector('.contact-form');
const bookEl = document.querySelector('.book-btn');
const bookbtnEl = document.querySelector('.book-btn');
const bookformEl = document.querySelector('.book-form');
const bookcloseEl = document.querySelector('.close-book');

btnEl.addEventListener('click', () => {
    formEl.classList.remove('active')
    backgroundEl.classList.add('active')
});

closebtnEl.addEventListener('click', () => {
    formEl.classList.add('active')
    backgroundEl.classList.remove('active')
});

bookbtnEl.addEventListener('click', () => {
    bookformEl.classList.remove('active')
});

bookcloseEl.addEventListener('click', () => {
    bookformEl.classList.add('active')
});


