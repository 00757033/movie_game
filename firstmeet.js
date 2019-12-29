$(document).ready(function () {

    var story="At the end of the 18th century,"+
    " the Bennets and their five daughters lived in the countryside of England."+
    " They owned a farm, which was economically independent and belonged to the gentry."+
    "As the farm will certainly be inherited by his cousin, Mr. Collins."+
    "So Mrs. Bennett was eager to marry off her five daughters before her husband died.";
     
    $("#start").html('<h1 class="example" data-in-effect="flipInX">'+story+'</h1>');
    $( ".example" ).textillate();
    setTimeout(first, 1000);
});
function first(){
    $("#start").click(function(){
        $(".example").fadeOut(3000,function(){localStorage.setItem("#li1",1); $("#li1").css("color", "black"); $("#li1").mouseenter(function () {
            $("#li1").css("cursor", "pointer");
          });} );
    });
}
