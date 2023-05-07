// API URL:
'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

// API Key:
var apiKey = 'd23ec0eb90d1adce584ccb0e923708e9'

// querySelectors for HTML variables
var searchButton = document.querySelector("#searchBtn");
var searchText = document.querySelector("#searchTxt");
var locHistory = document.querySelector("#locHistory");

var latitude = '';
var longitude = '';

// generates history of locations to be selected
// get local storage array - loop through index and create element per location name
var genHistory = function (locCoords) {
    // locHistory.appendChild()
}

// stores location coordinates in local storage
var storeLocation = function (data) {
    var newLocation = {
        'location': data[0].name,
        'latitude': data[0].lat,
        'longitude': data[0].lon
    };
    if (JSON.parse(localStorage.getItem('locCoords')) == null) { 
        locCoords = [];
    } else {
        locCoords = JSON.parse(localStorage.getItem('locCoords'));
    }
    locCoords.push(newLocation);
    localStorage.setItem('locCoords', JSON.stringify(locCoords));
    console.log(locCoords);
};

// uses search form to retrieve API data
var searchAPI = function (event) {
    // Receive location from form
    var searchLocation = searchText.value;
    // Handle location type (coords, zip, name)
    if (!searchLocation) {
        window.alert('Please enter a location to search.');
    } else {
        console.log(searchLocation);
        var geoapiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchLocation + '&appid=' + apiKey
        
        fetch(geoapiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log('API Call Successful');
                        console.log(data);
                        storeLocation(data);
                    })
                } else {
                    alert('Sorry, could not find information for this location.')
                }
            });
        
        searchText.value = ''
    }
};

searchButton.addEventListener('click', searchAPI);

// var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey

// insert location into api call
// return results from api call and store in local storage
// disply search results from local storage in dynamic list of buttons
// display data for selected location button from list as follows:
//  WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity