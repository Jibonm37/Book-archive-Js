document.getElementById('error-message').style.display='none'
const loadbooks = () => {
    const searchText = document.getElementById('search-text');
    const searchValue = searchText.value;
 
    
    // console.log(searchValue)
    const url = `https://openlibrary.org/search.json?q=${searchValue}`
    fetch(url)
  .then(response => response.json())
  .then(data => displayBooks(data.docs))
  document.getElementById('error-message').style.display='none';
  searchText.value = '';
  
   // Calling spinner
  spinner('block');
}

// spinner area ---------------------
const spinner = displaySpinner => {
  document.getElementById('spinner').style.display= displaySpinner;
}
loadbooks()
// display books function --------------------

const displayBooks = books => {
  
  
    const allResult = document.getElementById('all-result');
  

    allResult.textContent= '';
    if(books.length === 0){
      document.getElementById('error-message').style.display='block'
    }
    else{


      
      books?.forEach(book => {
          const item = document.createElement('div');
          item.classList.add('col')
          item.innerHTML = `
          <div class="card h-100">
                  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                  
                  <h1 class="card-title">Book Name:- ${book.title}</h1>
                    <h3 class="card-title">First Publish Year:- ${book.first_publish_year}</h3>
                    <h4 class="card-title"> Author Name :-  ${book.author_name}</h4>
                    <h5 class="card-title"> Publisher :-  ${book.publisher}</h5>
                    
                  </div>
                </div>
          
          `
          
          // console.log(book)
          allResult.appendChild(item);
      })




    }
   
    
    // Calling spinner
    spinner('none')
    
    
    
}