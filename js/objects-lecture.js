"use strict";

var vehicle = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seats : 5,
    color: "Voodoo blue",
    mileage: 10,
    started: false,
    start: function(){
        this.started = true;
        console.log("You started the vehicle.");
    },
    stop: function(){
        this.started = false;
        console.log("You turned off the vehicle.");
    },
    packages: {
        technology: true,
        navigation: true,
        soundDelux: true,
        offRoad: false,
    },
    drive: function(){
        if (this.started){
            console.log("vroom vroom");//function inside an object is called a method
            this.mileage++;
        }
        else{
            console.log("You need to start the vehicle first.");
        }
    }
}

function isNew(car){
    return car.mileage <= 15;
}
