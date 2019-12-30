$(document).ready(function () {
    var myMusic= new sound("String_Quartet.mp3");
    var inner='';
    inner='<ul><li>Elizabeth & Darcy<ul>';
        inner+='<li id="li0" onClick="clickchapter(event)">First meet</li>';
        inner+='<li id="li1" onClick="clickchapter(event)">Refuse to dance</li>';
        inner+='<li id="li2" onClick="clickchapter(event)">First chat</li>';
        inner+='<li id="li3" onClick="clickchapter(event)">Misunderstanding-1</li>';
        inner+='<li id="li4" onClick="clickchapter(event)">Misunderstanding-2</li>';
        inner+='<li id="li5" onClick="clickchapter(event)">Confession failed</li>';
        inner+='<li id="li6" onClick="clickchapter(event)">Unravel the misunderstanding</li>';
        inner+='<li id="li7" onClick="clickchapter(event)">Happy ending</li>';
        inner+='</ul></li></ul>';
        $("#leftdiv").html(inner);
        localStorage.setItem("#li0",1);
        $("#li0").css("cursor", "pointer");
        for(var i=1;i<=7;i++){
            if(localStorage.getItem("#li"+i)==null)
                localStorage.setItem("#li"+i,0);
                $("#li"+i).css("cursor", "default");
        }
        inner='';
        inner='<ul> Elizabeth & Collins';
        inner+='<li id="lip0" onClick="clickchapter(event)">Family dinner</li>';
        inner+='<li id="lip1" onClick="clickchapter(event)">propose marriage</li>';
        inner+='</ul>';
        $("#left2div").html(inner);
        if(localStorage.getItem("#lip1")==null)
            localStorage.setItem("#lip1",0);
        $("#lip1").css("cursor", "pointer");
        localStorage.setItem("#lip0",1);
    starts();
});
function starts(){
    $("#lip0").mouseenter(function () {
        $("#lip0").css("cursor", "pointer");
      });
    for(var i=0;i<localStorage.length;i++){
    if (localStorage.getItem(localStorage.key(i))==0) {
        $(localStorage.key(i)).css("color", "gray");
        $(localStorage.key(i)).css("cursor", "default");
      }
    else{
        $(localStorage.key(i)).css("color", "black");
         $(localStorage.key(i)).mouseenter(function () {
        $(localStorage.key(i)).css("cursor", "pointer");
      });
    }
}
}
function clickchapter(e){
    if(e.target.getAttribute("id")=="li0" && localStorage.getItem("#li0")!=0 ){
        window.location.href='firstmeet.html';
    }
    if(e.target.getAttribute("id")=="li1"&& localStorage.getItem("#li1")!=0 ){
        window.location.href='ball.html';
    }
    else if(e.target.getAttribute("id")=="li2"&& localStorage.getItem("#li2")!=0 ){
        window.location.href='First_chat.html';
    }
    else if(e.target.getAttribute("id")=="li3"&& localStorage.getItem("#li3")!=0 ){
        window.location.href='Misunderstanding.html';
    }
    else if(e.target.getAttribute("id")=="li4"&& localStorage.getItem("#li4")!=0 ){
        window.location.href='Misunderstanding2.html';
    }
    else if(e.target.getAttribute("id")=="li5"&& localStorage.getItem("#li5")!=0 ){
        window.location.href='confess.html';
    }
    else if(e.target.getAttribute("id")=="li6"&& localStorage.getItem("#li6")!=0 ){
        window.location.href='letter.html';
    }
    else if(e.target.getAttribute("id")=="li7"&& localStorage.getItem("#li7")!=0 ){
        window.location.href='end.html';
    }
    else if(e.target.getAttribute("id")=="lip0"&& localStorage.getItem("#lip0")!=0 ){
        window.location.href='dinner.html';
    }else if(e.target.getAttribute("id")=="lip1"&& localStorage.getItem("#lip1")!=0 ){
        window.location.href='marriage.html';
    }

}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("autoplay", "flase");
    this.sound.setAttribute("float", "true");
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}