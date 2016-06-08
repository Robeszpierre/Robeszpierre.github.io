$( ".logo" ).hover(function(){
  $(".mailCaption").css( "visibility", "visible" );
}, function(){
  $(".mailCaption").css( "visibility", "hidden" );
});

$(".icon-mark-github").hover(function(){
  $(this).css("background-position", "0 -32px");
}, function() {
  $(this).css("background-position", "0 0");
});

$(".icon-facebook").hover(function(){
  $(this).css("background-position", "0 -96px");
}, function() {
  $(this).css("background-position", "0 -64px");
});

$(".icon-treehouse").hover(function(){
  $(this).css("background-position", "0 -160px");
}, function() {
  $(this).css("background-position", "0 -128px");
});
