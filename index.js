
// let gameOfThrones

// const getTheNthChar = () => {

// }

// const getTheFifthBook = () => {
//   console.log(gameOfThrones[4])

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => renderBooks(data))
}


//getTheFifthBook()

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

