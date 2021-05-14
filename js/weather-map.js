
//create map
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.109, 32.738], // starting position [lng, lat]
    zoom: 10 // starting zoom
});
var marker = new mapboxgl.Marker({
    draggable: true,
    color: "red",
})
    .setLngLat([-97.109, 32.738])
    .addTo(map);

//set coordinates to use in the "write" function
var coordinates = [marker.getLngLat().lat, marker.getLngLat().lng];

marker.on("dragend", function () {
    coordinates = [marker.getLngLat().lat, marker.getLngLat().lng]
    console.log(coordinates)
    write();
});

//when the user double clicks on the map, move the cursor and post that information.
map.on("dblclick", listener => {
    marker.setLngLat(listener.lngLat);
    map.flyTo({
        center: [listener.lngLat.lng, listener.lngLat.lat],
        speed: 1,
        zoom: 10,
    });
    coordinates = [listener.lngLat.lat, listener.lngLat.lng]
    write();
});

//Button calls the "moveMarker" function and uses geocode to turn text input into Longitude and Latitudinal coordinates.
$("#search").click(function(){
    userInput = $("#user-input").val();
    console.log(userInput);
    moveMarkerToInput()
})

$("#mapStyle").change(function(){
    map.setStyle($("#mapStyle").val())
})

//The only reason anything is on screen
function write() {
    $.ajax("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&exclude=minutely,hourly&appid=" + WEATHERMAP_ACCESS_TOKEN)
        .done(function (response) {

            $("#insertInfo").html("");

            //iterate with response.daily.length
            for (var i = 0; i < response.daily.length; i++) {

                var today = response.daily[i];
                var todayDate = new Date(today.dt * 1000);
                todayDate = todayDate.toDateString()

                //Create the cards: jumbled mess of JS HTML
                var html = ""
                html = "<div class='container grow col-sm weather-" + (i + 1) + "'>";
                html += "<div class='headerContainer'><h4>" + todayDate + "</h4></div>"
                //Get current weather if it's "today"
                if(i === 0) {
                    html += "<h1 style='background-image: url(http://openweathermap.org/img/w/" + today.weather[0].icon + ".png); background-repeat: no-repeat; background-position: top;'>" + Math.round(response.current.temp) + "°</h1>";
                }else{
                    html += "<h1 style='background-image: url(http://openweathermap.org/img/w/" + today.weather[0].icon + ".png); background-repeat: no-repeat; background-position: top;'>" + Math.round(today.temp.day) + "°</h1>";
                }
                html += "<p>Real Feel: " + Math.round(today.feels_like.day) + "°</p>";
                html += "<div> low: " + Math.round(today.temp.min) + "° / High: " + Math.round(today.temp.max) + "°</div>";
                html += "<div> Humidity: " + today.humidity + "%</div>";
                html += "<div class='onBottom'> Chance of rain: " + Math.round(today.pop * 100) + "%</div>";
                html += "<div class='hiddenTillClick hiddenTest'>";

                //wind speed/direction and gusts
                html += "<div style='border-bottom: 1px solid black; width: 100%;'><p style='margin: 0 35%;'>Wind</p></div>";
                html += "<div style='text-align: center'>";
                html += "<div>" + displayWindDirection(today.wind_deg) + " " + Math.round(today.wind_speed) + "MPH</div>";
                html += "<div>Gusts: " + Math.round(today.wind_gust) + "MPH</div></div>";

                //sunrise
                html += "<div class='riseSet'><i class=\"fas fa-sun\"></i></div>";
                html += "<div class='row'>";
                html += "<div class='col'>Rise:<p>"+ riseSet(today.sunrise) + "am</p></div>";
                html += "<div class='col'>Set:<p>" + riseSet(today.sunset) + "pm</p></div></div>";

                //moonrise
                html += "<div class='riseSet'><i id='moon' class=\"fas fa-moon\"></i></div>";
                html += "<div class='row'>";
                html += "<div class='col'>Rise:<p>"+ riseSet(today.moonset) + "pm</p></div>";
                html += "<div class='col'>Set:<p>" + riseSet(today.moonrise) + "am</p></div></div></div>";
                html += "</div>";
                $("#insertInfo").append(html);


                //hide the second half of the card till clicked
                $(".weather-"+ (i + 1) + "").click(function(){
                    $(".hiddenTillClick").slideToggle(1000);
                })

                //set 5-8 to hide
                $(".weather-5, .weather-6, .weather-7, .weather-8").addClass("hiddenTest");
            }
            console.log(response);
        });
}
write();

//click to enable/disable cards
$("#toggleCards").click(toggle);

//===============Extra Functions=============//

//Find the cardinal direction of the wind using the angle given by API
function displayWindDirection(windDirection){
    var cardinalDirection = "";
    if(windDirection >= 349 || windDirection <= 11){
        cardinalDirection = "N";
    }else if(windDirection >= 12 && windDirection <= 34){
        cardinalDirection = "NNE";
    }else if(windDirection >= 35 && windDirection <= 56){
        cardinalDirection = "NE";
    }else if(windDirection >= 57 && windDirection <= 79){
        cardinalDirection = "ENE";
    }else if(windDirection >= 80 && windDirection <= 101){
        cardinalDirection = "E";
    }else if(windDirection >= 102 && windDirection <= 124){
        cardinalDirection = "ESE";
    }else if(windDirection >= 125 && windDirection <= 146){
        cardinalDirection = "SE";
    }else if(windDirection >= 147 && windDirection <= 169){
        cardinalDirection = "SSE";
    }else if(windDirection >= 170 && windDirection <= 191){
        cardinalDirection = "S";
    }else if(windDirection >= 192 && windDirection <= 214){
        cardinalDirection = "SSW";
    }else if(windDirection >= 215 && windDirection <= 236){
        cardinalDirection = "SW";
    }else if(windDirection >= 237 && windDirection <= 258){
        cardinalDirection = "WSW";
    }else if(windDirection >= 259 && windDirection <= 281){
        cardinalDirection = "W";
    }else if(windDirection >= 282 && windDirection <= 303){
        cardinalDirection = "WNW";
    }else if(windDirection >= 304 && windDirection <= 326){
        cardinalDirection = "NW";
    }else if(windDirection >= 327 && windDirection <= 348){
        cardinalDirection = "NNW";
    }else{
        cardinalDirection = "Error";
    }
    return cardinalDirection;
}

function moveMarkerToInput(){
    geocode(userInput, MAPBOX_ACCESS_TOKEN).then(function (results){
        marker.setLngLat(results);
        coordinates = [marker.getLngLat().lat, marker.getLngLat().lng];

        map.flyTo({
            center: results,
            zoom: 10,
            speed: 1
        });
        write();
    });
}

//toggle the last 4 to hide or show
function toggle() {
    $(".weather-5, .weather-6, .weather-7, .weather-8").toggleClass("hiddenTest");
}

//get the sun(moon)rise and sun(moon)set as readable variables
function riseSet(item){
    var readableItem = new Date(item * 1000);
    readableItem = readableItem.getHours() + ":" + readableItem.getMinutes();
    return readableItem;
}
