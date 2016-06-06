$( ".logo" ).hover(function(){
  $(".mailCaption").css( "visibility", "visible" );
}, function(){
  $(".mailCaption").css( "visibility", "hidden" );
});

$(".icon-mark-github").hover(function(){
  $(this).css("background-position", "0 -64px");
}, function() {
  $(this).css("background-position", "0 0px");
});

$(".icon-facebook").hover(function(){
  $(this).css("background-position", "0 -96px");
}, function() {
  $(this).css("background-position", "0 -32px");
});
