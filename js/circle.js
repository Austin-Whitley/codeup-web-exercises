(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * this.radius**2; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding){
                // var upOrDown = this.getArea() - Math.floor(this.getArea());
                // if(upOrDown >= 0.5){ //round up if the remainder is 0.5 or larger.
                //     console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.ceil(this.getArea()));
                // }else if(upOrDown <= 0.49){ // round down if the remainder is 0.49 or lower.
                //     console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.floor(this.getArea()));
                // }
                //using the Math.round() method we can turn the if else block into one line.
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));

            }else{
                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
