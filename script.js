// Function to fetch game suggestions from Steam API based on search query
function fetchGameSuggestions(query) {
    const steamApiKey = 'steamkey.php'; 
  
    // Make an HTTP GET request to Steam API endpoint for game suggestions
    return fetch(`https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${steamApiKey}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        const suggestions = data.response.items;
        return suggestions;
      })
      .catch(error => {
        console.error('Error:', error);
        return [];
      });
  }
  
  // Function to handle search input changes
  function handleSearchInput() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
  
    const query = searchInput.value.trim();
  
    if (query.length === 0) {
      suggestionsContainer.innerHTML = '';
      return;
    }
  
    // Fetch game suggestions based on search query
    fetchGameSuggestions(query)
      .then(suggestions => {
        suggestionsContainer.innerHTML = '';
  
        if (suggestions.length === 0) {
          suggestionsContainer.innerHTML = '<p>No suggestions found.</p>';
        } else {
          suggestions.forEach(suggestion => {
            const suggestionLink = document.createElement('a');
            suggestionLink.href = `search-results.html?query=${encodeURIComponent(suggestion.name)}`;
            suggestionLink.textContent = suggestion.name;
            suggestionsContainer.appendChild(suggestionLink);
          });
        }
      });
  }
  
  // Event listener for search input changes
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearchInput);
  