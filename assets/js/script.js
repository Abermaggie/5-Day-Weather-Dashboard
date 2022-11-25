var ApiKey= "a43777f985f5f6fe7bee6789245c882a";
var openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var forcastURL ='https://api.openweathermap.org/data/2.5/forecast?lat=';
var formEl= $('#seach-city');
var currentDate= moment().format('M/DD/YYYY');
var forecastEl= $('.forecast');
var historyEl= $('#history');
var cityEl= $('#city');
var fiveForecastEl= $('five-forecast');
var weatherIcon= 'http://openweathermap.org/img/wn/';
var citySearch =[];

function fetchWeather(city) {
    var coordinates = `${openWeatherUrl}${city}&appid=${ApiKey}`
    fetch (coordinates)
    .then(function (coordinateResult) {
        if (coordinateResult.ok) {
            coordinateResult.json().then(function (weatherInfo) {
                var weatherNow =$('<div></div>')
                .attr({id: 'weather-now'})
                var current= weatherInfo.list[0];
                var icon= current.weather[0].icon;
                var cityIcon= weatherIcon + icon + '.png';
                var iconEl= $('<img>')
                .attr({id: 'weather-current-icon',
                    src:cityIcon,
                    alt:'Icon for weather'});
                    var currentHeading =$('<h2></h2>')
                        .text(city+ '(' +currentDate + ')');
                    var weatherListCurrent =$('<ul></ul>');
                    var weatherDetailsCurrent= ['Temp: ' + current.main.temp + ' °F', 'Wind: ' + current.wind.speed + ' MPH', 'Humidity: ' + current.main.humidity + '%']
                    for(var i=0; i<weatherDetailsCurrent.length; i++) {
                        varWeatherItem =$('<li></li>')
                            .text(weatherDetailsCurrent[i])
                        weatherListCurrent.append(currentWetherItem);
                    }
                    weatherNow.append(currentHeading);
                    currentHeading.append(iconEl);
                    weatherNow.append(weatherListCurrent);
                    $('#five-forecast').before(weatherNow);
            })
        }
    })
}