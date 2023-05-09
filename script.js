var searchInput = null;
var suggestionsContainer = null;

// Function to handle search input
async function handleSearchInput() {
    var searchTerm = searchInput.value.trim();
  
    // Clear suggestions container
    suggestionsContainer.innerHTML = '';
  
    // Fetch game suggestions based on the search term
    if (searchTerm.length > 0) {
      // Make an HTTP GET request to fetch game suggestions
      await fetch('https://noblewolf42.com:3005', {
        method: 'GET',
        headers: {
          'Target-URL': `https://api.steampowered.com/ISteamApps/GetAppList/v2`
      }})
        .then(response => response.json())
        .then(data => {
          const gameSuggestions = data;
  
          // Display the game suggestions
          if (gameSuggestions.length == ) {
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
  //const searchButton = document.getElementById('searchButton');
  //searchButton.addEventListener('click', handleSearchButtonClick);
  
  // Event listener for search input keyup event
  
//#region
document.addEventListener("DOMContentLoaded", function () {
  searchInput = document.getElementById('searchInput');
  suggestionsContainer = document.getElementById('suggestionsContainer');
  searchInput.addEventListener('keyup', handleSearchInputKeyup);
});
//#endregion