document.getElementById('search-button').addEventListener('click', searchBooks);
document.getElementById('favorites-button').addEventListener('click', showFavorites);

let currentPage = 1;
const booksPerPage = 10; // Nombre de livres par page

function searchBooks(page = 1) {
    const query = document.getElementById('search-bar').value.trim();
    if (!query) {
        alert('Veuillez entrer un terme de recherche.');
        return;
    }

    currentPage = page;
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&page=${currentPage}`;

    console.log('Fetching URL:', url);
    document.getElementById('loading-indicator').style.display = 'block';

    fetch(url)
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            if (data && data.docs) {
                displayBooks(data.docs, data.numFound);
            } else {
                throw new Error('Invalid data format');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Erreur lors de la récupération des données. Veuillez réessayer plus tard.');
        })
        .finally(() => {
            document.getElementById('loading-indicator').style.display = 'none';
        });
}

function displayBooks(books, numFound) {
    const bookResults = document.getElementById('book-results');
    bookResults.innerHTML = '';

    if (numFound === 0) {
        bookResults.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author_name ? book.author_name.join(', ') : 'Auteur inconnu'}</p>
            <p>ISBN: ${book.isbn ? book.isbn[0] : 'Non disponible'}</p>
            <button onclick="addToList('${book.title}', '${book.author_name ? book.author_name.join(', ') : 'Auteur inconnu'}', '${book.cover_i}', '${book.isbn ? book.isbn[0] : 'Non disponible'}')">Ajouter à la liste</button>
        `;
        bookResults.appendChild(bookElement);
    });

    displayPagination(numFound);
}

function displayPagination(numFound) {
    const totalPages = Math.ceil(numFound / booksPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.createElement('button');
        pageElement.textContent = i;
        pageElement.className = 'page-button';
        pageElement.addEventListener('click', () => {
            searchBooks(i);
        });
        pagination.appendChild(pageElement);
    }
}

function addToList(title, author, coverId, isbn) {
    const lists = document.getElementById('lists');
    const listElement = document.createElement('div');
    listElement.className = 'list';
    listElement.innerHTML = `
        <img src="https://covers.openlibrary.org/b/id/${coverId}-M.jpg" alt="${title}">
        <h3>${title}</h3>
        <p>${author}</p>
        <p>ISBN: ${isbn}</p>
        <button onclick="removeFromList(this)">Retirer de la liste</button>
    `;
    lists.appendChild(listElement);
    saveLists();
}

function removeFromList(element) {
    element.parentElement.remove();
    saveLists();
}

function saveLists() {
    const lists = document.getElementById('lists').innerHTML;
    localStorage.setItem('bookLists', lists);
}

function loadLists() {
    const savedLists = localStorage.getItem('bookLists');
    if (savedLists) {
        document.getElementById('lists').innerHTML = savedLists;
    }
}

function showFavorites() {
    document.getElementById('book-results').innerHTML = '';
    document.getElementById('pagination').innerHTML = '';
    document.getElementById('loading-indicator').style.display = 'none';
    loadLists();
}

document.addEventListener('DOMContentLoaded', loadLists);
