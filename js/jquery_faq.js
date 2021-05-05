"use strict";

$("dt").click(function(){
    $("dd").toggleClass("invisible");
});

//highlight the last element for each unordered list
$("#last-list-element").click(function(){
    $("ul").children().next().next().next().css("background-color", "yellow");
});

//bold the li elements when clicking on the h3 title for that list
$("h3").click(function(){
    $(this).next().css("font-weight", "bold");
})

//color the first element blue if you click inside the list
$("ul").click(function(){
    $(this).children().first().css("color", "blue");
});

$("dt").click(function(){
    $(this).toggleClass("highlight");
})

$("#toggleInvis").click(function(){
    $("dd").removeClass("invisible");
})



//
// $('#last-list-element').click(function(){
//     $('li').each(function(index){
//         if(index === 11 || index === 15 || index === 19){
//             $(this).css("color", "red");
//         }
//     });
// });
