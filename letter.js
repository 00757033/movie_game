$(document).ready(function () {

    var story="I shall not renew the sentiments which were so disgusting to you."+
    " But if I may, I will address the two offences you have laid against me."+
    " My father loved Mr Wickham as a son."+
    " He left him a generous living."+
    " But upon my father's death, Mr Wickham announced  he had no intention of taking orders."+
    " He demanded the value of the living, which he'd gambled away within weeks."+
    " He then wrote, demanding more money, which I refused."+
    " After which, he severed all acquaintance.";
    
     
    $("#start").html('<h1 class="example" data-in-effect="flipInX" id="page1">'+story+'</h1>');
    $( "#page1" ).textillate();
    setTimeout(first, 1000);
});
function first(){
    var story2="He came back to see us last summer, and declared passionate love for my sister, whom he tried to persuade to elope with him."+
    " When it was made clear he would never receive a penny of it, he disappeared."+
    " I will not attempt to convey the depth of Georgiana's despair. She was  15  years old."+
    " As to the other matter, of your sister and Mr Bingley, though the motives which governed me may appear insufficient, they were in the service of a friend.";
    $("#page1").click(function(){
         $("#start").html('<h1 class="example" data-in-effect="flipInX" id="page2">'+story2+'</h1>');
        $( "#page2" ).textillate();
        setTimeout(second, 1000);
    });
}
function second(){
    $("#page2").click(function(){
        localStorage.setItem("#li7",1);
    });
}