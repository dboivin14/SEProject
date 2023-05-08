// Function to handle search input
function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const searchTerm = searchInput.value.trim();
  
    // Clear suggestions container
    suggestionsContainer.innerHTML = '';
  
    // Fetch game suggestions based on the search term
    if (searchTerm.length > 0) {
      // Make an HTTP GET request to fetch game suggestions
      fetch(`https://api.example.com/search?term=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
          const gameSuggestions = data.suggestions;
  
          // Display the game suggestions
          if (gameSuggestions.length === 0) {
            suggestionsContainer.innerHTML = '<p>No game suggestions found.</p>';
          } else {
            gameSuggestions.forEach(suggestion => {
              suggestionsContainer.innerHTML += `<p>${suggestion}</p>`;
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }
  
  // Function to handle search button click
  function handleSearchButtonClick() {
    handleSearchInput();
  }
  
  // Function to handle search input keyup event
  function handleSearchInputKeyup() {
    handleSearchInput();
  }
  
  // Event listener for search button click
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', handleSearchButtonClick);
  
  // Event listener for search input keyup event
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', handleSearchInputKeyup);
  