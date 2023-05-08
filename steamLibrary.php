<!DOCTYPE html>
<html>
<head>
  <title>Steam Game Library</title>
 
    <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  
</head>
<body>
  <header>
    <h1>Steam Game Library</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="steamLibrary.html">Games</a>
        <a href="login.html">Log In</a>
        <a href="registration.html">Sign Up</a>
      </nav>
  </header>
  
  <div id="gameLibrary">
    <h2>Loading...</h2>
  </div>

  <script>
    // Function to fetch the game library data from Steam API based on search query and filters
    function fetchGameLibrary() {
      const steamApiKey = steamkey.php; // Replace with your Steam API key

      //const searchQuery = 'YOUR_SEARCH_QUERY'; 
      //const genreFilter = 'YOUR_GENRE_FILTER'; 

      // Make an HTTP GET request to Steam API endpoint with search query and filters
      fetch(`https://api.steampowered.com/ISteamApps/GetAppList/v2/?key=${steamApiKey}`)
        .then(response => response.json())
        .then(data => {
          const gameList = data.applist.apps;

          // Filter the game list based on the search query and genre filter
          const filteredGames = gameList.filter(game => {
            const gameName = game.name.toLowerCase();
            const genre = game.genre.toLowerCase();

            const queryMatchesName = gameName.includes(searchQuery.toLowerCase());
            const queryMatchesGenre = genre.includes(genreFilter.toLowerCase()) || genreFilter === '';

            return queryMatchesName && queryMatchesGenre;
          });

          // Display the filtered game list
          const gameLibraryDiv = document.getElementById('gameLibrary');

          gameLibraryDiv.innerHTML = '<h2>Game Library:</h2>';

          if (filteredGames.length === 0) {
            gameLibraryDiv.innerHTML += '<p>No games found matching the search query and filters.</p>';
          } else {
            filteredGames.forEach(game => {
              gameLibraryDiv.innerHTML += `<p>${game.name}</p>`;
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    // Call the fetchGameLibrary function when the page is loaded
    window.addEventListener('load', fetchGameLibrary);
  </script>
</body>
</html>