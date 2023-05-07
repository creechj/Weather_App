// API URL:
'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

// API Key:
var apiKey = 'd23ec0eb90d1adce584ccb0e923708e9'

// querySelectors for HTML variables
var searchButton = document.querySelector("#searchBtn");
var searchText = document.querySelector("#searchTxt");

// uses search form to retrieve API data
var searchAPI = function (event) {
    // Receive location from form
    var searchLocation = searchText.value;
    // Handle location type (coords, zip, name)
    if (!searchLocation) {
        window.alert('Please enter a location to search.');
    } else {
        console.log(searchLocation);
        // var locLat = '42.6529'
        // var locLon = '-73.7567'
        var geoapiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchLocation + '&appid=' + apiKey
        
        fetch(geoapiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log('API Call Successful');
                        console.log(data[0].lat, data[0].lon);
                    })
                } else {
                    alert('Sorry, could not find information for this location.')
                }
            })
        
        searchText.value = ''
    }
};

searchButton.addEventListener('click', searchAPI);

// insert location into api call
// return results from api call and store in local storage
// disply search results from local storage in dynamic list of buttons
// display data for selected location button from list as follows:
//  WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity