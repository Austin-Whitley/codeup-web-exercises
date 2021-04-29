$("h3").click(function(){
    $(this).next().slideToggle(500);
    $(this).next().children('img').slideToggle(500)
});