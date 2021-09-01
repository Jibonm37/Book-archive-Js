const loadbooks = () => {
    const searchText = document.getElementById('search-text');
    const searchValue = searchText.value;
    // console.log(searchValue)
    const url = `http://openlibrary.org/search.json?q=${searchValue}`
    fetch(url)
  .then(response => response.json())
  .then(data => displayBooks(data.docs))
  searchText.value = '';
}
// load books function --------------------
loadbooks()
const displayBooks = books => {
    const allResult = document.getElementById('all-result');
    allResult.textContent= '';
    console.log(books.title)
    books.forEach(book => {
        const item = document.createElement('div');
        item.classList.add('col')
        item.innerHTML = `
        <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                
                <h1 class="card-title">Book Name:- ${book.title}</h1>
                  <h3 class="card-title"> Publish Year:- ${book.publish_year}</h3>
                  <h5 class="card-title"> Author Name :-  ${book.author_name}</h5>
                  
                </div>
              </div>
        
        `
        
        console.log(book)
        allResult.appendChild(item);
    })
    // console.log(allResult)
    
}