(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var breakString = planetsArray.join("<br>");
    console.log(breakString);
    //useful to separate the planets on the html page, since the <br> is a line break.


    var listString = "<ul>";
    planetsArray.forEach(function(planet){
        listString += "<li>" + planet + "</li>";
    })
    listString += "</ul>";
    console.log(listString);

    document.getElementById('planets').innerHTML = listString;
    //document.getElementById('planets').innerHTML = breakString;


})();
