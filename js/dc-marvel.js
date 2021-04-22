"use strict";

// var accessTheDOM = document.getElementById("dc");
// var showMe = accessTheDOM.innerHTML;
// alert(showMe);

// alert(document.getElementById("dc").innerHTML);

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var preference = "Marvel";
var dc = document.getElementById("dc");
dc.innerHTML = dc.innerHTML + " Animated Universe";
var output = dontLike.innerHTML + " " + dc.innerHTML;
alert(output);

dc.setAttribute('class', 'hotpink'); //allows you to set any attribute (class, src, id, etc..) of an object

var hotPinkClub = document.getElementsByClassName("hotpink");

hotPinkClub[0].style.color = 'blue';


var submitButton = document.getElementById("colorSubmission");
submitButton.onclick = function() {
    var colorInput = document.getElementById("colorPrefernece");
    var pragraphs = document.getElementsByTagName("p");
    alert(colorPrefernce.value);
}