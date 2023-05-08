// API URL:
'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'

// API Key:
var apiKey = 'd23ec0eb90d1adce584ccb0e923708e9'

// querySelectors for HTML variables
var searchButton = document.querySelector("#searchBtn");
var searchText = document.querySelector("#searchTxt");
var locHistory = document.querySelector("#locHistory");
var locHistoryitems = document.querySelectorAll("a");
var citySpan = document.querySelector('#citySpn');
var dateSpan = document.querySelector('#dateSpn');
var iconSpan = document.querySelector('#iconSpn');

// retrieves weather data using location's coordinates from local storage
var loadWeather = function(event) {
    // need to clear 'active' from other elements !!!
    var highlightLoc = this.getAttribute('class');
    this.setAttribute('class', highlightLoc + ' active');
    var locIndex = this.getAttribute('value');
    locCoords = JSON.parse(localStorage.getItem('locCoords'));
    var latitude = locCoords[locIndex].latitude;
    var longitude = locCoords[locIndex].longitude;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=' + apiKey;
    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function(data){
                console.log(data);
                // Current weather display
                var city = data.city.name;
                citySpan.innerHTML = city;
                var mainDate = data.list[0].dt_txt.substr(5, 2) + '/' + data.list[0].dt_txt.substr(8, 2) + '/' + data.list[0].dt_txt.substr(0, 4);
                dateSpan.innerHTML = mainDate;
                var mainIcon = data.list[0].weather[0].icon;
                var iconUrl = 'https://openweathermap.org/img/wn/' + mainIcon + '@2x.png';
                iconSpan.innerHTML = "<img src=" + iconUrl + ">";
                var mainTemp = 'Temp: ' + data.list[0].main.temp + '&deg;F';
                var mainWind = 'Wind: ' + data.list[0].wind.speed + ' MPH';
                var mainHumidity = 'Humidity: ' + data.list[0].main.humidity + '%';
                document.querySelector('#mainTemp').innerHTML = mainTemp
                document.querySelector('#mainHumidity').innerHTML = mainHumidity
                document.querySelector('#mainWind').innerHTML = mainWind
                
                // 5-day forecast
                // Day 1
                var dayoneDate = data.list[7].dt_txt.substr(5, 2) + '/' + data.list[7].dt_txt.substr(8, 2) + '/' + data.list[7].dt_txt.substr(0, 4);;
                document.querySelector('#dayoneDate').innerHTML = dayoneDate;
                var dayoneIcon = data.list[7].weather[0].icon;
                var icononeUrl = 'https://openweathermap.org/img/wn/' + dayoneIcon + '@2x.png';
                document.querySelector('#dayoneIcon').innerHTML = "<img src=" + icononeUrl + ">";
                var dayoneTemp = 'Temp: ' + data.list[7].main.temp + '&deg;F';
                var dayoneWind = 'Wind: ' + data.list[7].wind.speed + ' MPH';
                var dayoneHumidity = 'Humidity: ' + data.list[7].main.humidity + '%';
                document.querySelector('#dayoneTemp').innerHTML = dayoneTemp
                document.querySelector('#dayoneHumidity').innerHTML = dayoneHumidity
                document.querySelector('#dayoneWind').innerHTML = dayoneWind

                // Day 2
                var daytwoDate = data.list[15].dt_txt.substr(5, 2) + '/' + data.list[15].dt_txt.substr(8, 2) + '/' + data.list[15].dt_txt.substr(0, 4);;
                document.querySelector('#daytwoDate').innerHTML = daytwoDate;
                var daytwoIcon = data.list[15].weather[0].icon;
                var icontwoUrl = 'https://openweathermap.org/img/wn/' + daytwoIcon + '@2x.png';
                document.querySelector('#daytwoIcon').innerHTML = "<img src=" + icontwoUrl + ">";
                var daytwoTemp = 'Temp: ' + data.list[15].main.temp + '&deg;F';
                var daytwoWind = 'Wind: ' + data.list[15].wind.speed + ' MPH';
                var daytwoHumidity = 'Humidity: ' + data.list[2].main.humidity + '%';
                document.querySelector('#daytwoTemp').innerHTML = daytwoTemp
                document.querySelector('#daytwoHumidity').innerHTML = daytwoHumidity
                document.querySelector('#daytwoWind').innerHTML = daytwoWind

                // Day 3
                var daythreeDate = data.list[23].dt_txt.substr(5, 2) + '/' + data.list[23].dt_txt.substr(8, 2) + '/' + data.list[23].dt_txt.substr(0, 4);;
                document.querySelector('#daythreeDate').innerHTML = daythreeDate;
                var daythreeIcon = data.list[23].weather[0].icon;
                var iconthreeUrl = 'https://openweathermap.org/img/wn/' + daythreeIcon + '@2x.png';
                document.querySelector('#daythreeIcon').innerHTML = "<img src=" + iconthreeUrl + ">";
                var daythreeTemp = 'Temp: ' + data.list[23].main.temp + '&deg;F';
                var daythreeWind = 'Wind: ' + data.list[23].wind.speed + ' MPH';
                var daythreeHumidity = 'Humidity: ' + data.list[23].main.humidity + '%';
                document.querySelector('#daythreeTemp').innerHTML = daythreeTemp
                document.querySelector('#daythreeHumidity').innerHTML = daythreeHumidity
                document.querySelector('#daythreeWind').innerHTML = daythreeWind

                // Day 4
                var dayfourDate = data.list[31].dt_txt.substr(5, 2) + '/' + data.list[31].dt_txt.substr(8, 2) + '/' + data.list[31].dt_txt.substr(0, 4);;
                document.querySelector('#dayfourDate').innerHTML = dayfourDate;
                var dayfourIcon = data.list[31].weather[0].icon;
                var iconfourUrl = 'https://openweathermap.org/img/wn/' + dayfourIcon + '@2x.png';
                document.querySelector('#dayfourIcon').innerHTML = "<img src=" + iconfourUrl + ">";
                var dayfourTemp = 'Temp: ' + data.list[31].main.temp + '&deg;F';
                var dayfourWind = 'Wind: ' + data.list[31].wind.speed + ' MPH';
                var dayfourHumidity = 'Humidity: ' + data.list[31].main.humidity + '%';
                document.querySelector('#dayfourTemp').innerHTML = dayfourTemp
                document.querySelector('#dayfourHumidity').innerHTML = dayfourHumidity
                document.querySelector('#dayfourWind').innerHTML = dayfourWind

                // Day 5
                var dayfiveDate = data.list[39].dt_txt.substr(5, 2) + '/' + data.list[39].dt_txt.substr(8, 2) + '/' + data.list[39].dt_txt.substr(0, 4);;
                document.querySelector('#dayfiveDate').innerHTML = dayfiveDate;
                var dayfiveIcon = data.list[39].weather[0].icon;
                var iconfiveUrl = 'https://openweathermap.org/img/wn/' + dayfiveIcon + '@2x.png';
                document.querySelector('#dayfiveIcon').innerHTML = "<img src=" + iconfiveUrl + ">";
                var dayfiveTemp = 'Temp: ' + data.list[39].main.temp + '&deg;F';
                var dayfiveWind = 'Wind: ' + data.list[39].wind.speed + ' MPH';
                var dayfiveHumidity = 'Humidity: ' + data.list[39].main.humidity + '%';
                document.querySelector('#dayfiveTemp').innerHTML = dayfiveTemp
                document.querySelector('#dayfiveHumidity').innerHTML = dayfiveHumidity
                document.querySelector('#dayfiveWind').innerHTML = dayfiveWind

                console.log(city);
            })
        })
};

// retrieves weather for searched location via API
var searchWeather = function(data) {
    var latitude = data[0].lat;
    var longitude = data[0].lon;
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=' + apiKey;
    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function(data){
                console.log(data);
                // Current weather display
                var city = data.city.name;
                citySpan.innerHTML = city;
                var mainDate = data.list[0].dt_txt.substr(5, 2) + '/' + data.list[0].dt_txt.substr(8, 2) + '/' + data.list[0].dt_txt.substr(0, 4);
                dateSpan.innerHTML = mainDate;
                var mainIcon = data.list[0].weather[0].icon;
                var iconUrl = 'https://openweathermap.org/img/wn/' + mainIcon + '@2x.png';
                iconSpan.innerHTML = "<img src=" + iconUrl + ">";
                var mainTemp = 'Temp: ' + data.list[0].main.temp + '&deg;F';
                var mainWind = 'Wind: ' + data.list[0].wind.speed + ' MPH';
                var mainHumidity = 'Humidity: ' + data.list[0].main.humidity + '%';
                document.querySelector('#mainTemp').innerHTML = mainTemp
                document.querySelector('#mainHumidity').innerHTML = mainHumidity
                document.querySelector('#mainWind').innerHTML = mainWind
                
                // 5-day forecast
                // Day 1
                var dayoneDate = data.list[7].dt_txt.substr(5, 2) + '/' + data.list[7].dt_txt.substr(8, 2) + '/' + data.list[7].dt_txt.substr(0, 4);;
                document.querySelector('#dayoneDate').innerHTML = dayoneDate;
                var dayoneIcon = data.list[7].weather[0].icon;
                var icononeUrl = 'https://openweathermap.org/img/wn/' + dayoneIcon + '@2x.png';
                document.querySelector('#dayoneIcon').innerHTML = "<img src=" + icononeUrl + ">";
                var dayoneTemp = 'Temp: ' + data.list[7].main.temp + '&deg;F';
                var dayoneWind = 'Wind: ' + data.list[7].wind.speed + ' MPH';
                var dayoneHumidity = 'Humidity: ' + data.list[7].main.humidity + '%';
                document.querySelector('#dayoneTemp').innerHTML = dayoneTemp
                document.querySelector('#dayoneHumidity').innerHTML = dayoneHumidity
                document.querySelector('#dayoneWind').innerHTML = dayoneWind

                // Day 2
                var daytwoDate = data.list[15].dt_txt.substr(5, 2) + '/' + data.list[15].dt_txt.substr(8, 2) + '/' + data.list[15].dt_txt.substr(0, 4);;
                document.querySelector('#daytwoDate').innerHTML = daytwoDate;
                var daytwoIcon = data.list[15].weather[0].icon;
                var icontwoUrl = 'https://openweathermap.org/img/wn/' + daytwoIcon + '@2x.png';
                document.querySelector('#daytwoIcon').innerHTML = "<img src=" + icontwoUrl + ">";
                var daytwoTemp = 'Temp: ' + data.list[15].main.temp + '&deg;F';
                var daytwoWind = 'Wind: ' + data.list[15].wind.speed + ' MPH';
                var daytwoHumidity = 'Humidity: ' + data.list[2].main.humidity + '%';
                document.querySelector('#daytwoTemp').innerHTML = daytwoTemp
                document.querySelector('#daytwoHumidity').innerHTML = daytwoHumidity
                document.querySelector('#daytwoWind').innerHTML = daytwoWind

                // Day 3
                var daythreeDate = data.list[23].dt_txt.substr(5, 2) + '/' + data.list[23].dt_txt.substr(8, 2) + '/' + data.list[23].dt_txt.substr(0, 4);;
                document.querySelector('#daythreeDate').innerHTML = daythreeDate;
                var daythreeIcon = data.list[23].weather[0].icon;
                var iconthreeUrl = 'https://openweathermap.org/img/wn/' + daythreeIcon + '@2x.png';
                document.querySelector('#daythreeIcon').innerHTML = "<img src=" + iconthreeUrl + ">";
                var daythreeTemp = 'Temp: ' + data.list[23].main.temp + '&deg;F';
                var daythreeWind = 'Wind: ' + data.list[23].wind.speed + ' MPH';
                var daythreeHumidity = 'Humidity: ' + data.list[23].main.humidity + '%';
                document.querySelector('#daythreeTemp').innerHTML = daythreeTemp
                document.querySelector('#daythreeHumidity').innerHTML = daythreeHumidity
                document.querySelector('#daythreeWind').innerHTML = daythreeWind

                // Day 4
                var dayfourDate = data.list[31].dt_txt.substr(5, 2) + '/' + data.list[31].dt_txt.substr(8, 2) + '/' + data.list[31].dt_txt.substr(0, 4);;
                document.querySelector('#dayfourDate').innerHTML = dayfourDate;
                var dayfourIcon = data.list[31].weather[0].icon;
                var iconfourUrl = 'https://openweathermap.org/img/wn/' + dayfourIcon + '@2x.png';
                document.querySelector('#dayfourIcon').innerHTML = "<img src=" + iconfourUrl + ">";
                var dayfourTemp = 'Temp: ' + data.list[31].main.temp + '&deg;F';
                var dayfourWind = 'Wind: ' + data.list[31].wind.speed + ' MPH';
                var dayfourHumidity = 'Humidity: ' + data.list[31].main.humidity + '%';
                document.querySelector('#dayfourTemp').innerHTML = dayfourTemp
                document.querySelector('#dayfourHumidity').innerHTML = dayfourHumidity
                document.querySelector('#dayfourWind').innerHTML = dayfourWind

                // Day 5
                var dayfiveDate = data.list[39].dt_txt.substr(5, 2) + '/' + data.list[39].dt_txt.substr(8, 2) + '/' + data.list[39].dt_txt.substr(0, 4);;
                document.querySelector('#dayfiveDate').innerHTML = dayfiveDate;
                var dayfiveIcon = data.list[39].weather[0].icon;
                var iconfiveUrl = 'https://openweathermap.org/img/wn/' + dayfiveIcon + '@2x.png';
                document.querySelector('#dayfiveIcon').innerHTML = "<img src=" + iconfiveUrl + ">";
                var dayfiveTemp = 'Temp: ' + data.list[39].main.temp + '&deg;F';
                var dayfiveWind = 'Wind: ' + data.list[39].wind.speed + ' MPH';
                var dayfiveHumidity = 'Humidity: ' + data.list[39].main.humidity + '%';
                document.querySelector('#dayfiveTemp').innerHTML = dayfiveTemp
                document.querySelector('#dayfiveHumidity').innerHTML = dayfiveHumidity
                document.querySelector('#dayfiveWind').innerHTML = dayfiveWind
            })
        })
};


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
};

// uses search form to retrieve API data
var searchAPI = function (event) {
    // Receive location from form
    var searchLocation = searchText.value;
    // Handle location type (coords, zip, name)
    if (!searchLocation) {
        window.alert('Please enter a location to search.');
    } else {
        var geoapiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + searchLocation + '&appid=' + apiKey
        
        fetch(geoapiUrl)
            .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        console.log('API Call Successful');
                        storeLocation(data);
                        locHistory.innerHTML = '';
                        genHistory();
                        searchWeather(data);
                    })
                } else {
                    alert('Sorry, could not find information for this location.')
                }
            });
        
        searchText.value = ''
    }
};

// generates history of locations to be selected
// get local storage array - loop through index and create element per location name
var genHistory = function () {
    if (JSON.parse(localStorage.getItem('locCoords')) == null) {
        return;
    } else {
        var locationList = JSON.parse(localStorage.getItem('locCoords'));
        for (i=0; i < locationList.length; i++) {
            var locText = locationList[i].location;
            var locItem = document.createElement('a');
            locHistory.appendChild(locItem);
            locItem.innerHTML = locText;
            locItem.setAttribute('class', 'list-group-item list-group-item-action border-primary');
            locItem.setAttribute('value', locationList.indexOf(locationList[i]));
            locItem.addEventListener('click', loadWeather);   
        };
    }
};


searchButton.addEventListener('click', searchAPI);
genHistory();

// insert location into api call
// return results from api call and store in local storage
// disply search results from local storage in dynamic list of buttons
// display data for selected location button from list as follows:
//  WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity