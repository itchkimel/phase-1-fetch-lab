

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  // Render info from the API into JSON (POJO) format
  .then(resp => resp.json())
  // '.then' we apply the renderBooKs function on the JSON/POJO file we recieved back 
  .then(Obj => renderBooks(Obj))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.append(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
