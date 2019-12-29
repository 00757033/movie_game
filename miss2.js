function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="miss10"){
        e.target.setAttribute("class", "miss11");
            e.target.setAttribute("id", "miss11");
    }
    else if (e.target.getAttribute("id")=="miss11"){
        e.target.setAttribute("class", "miss12");
            e.target.setAttribute("id", "miss12");
    }
    else if (e.target.getAttribute("id")=="miss12"){
            e.target.setAttribute("class", "miss13");
                e.target.setAttribute("id", "miss13");
        }
     else   if (e.target.getAttribute("id")=="miss13"){
            e.target.setAttribute("class", "miss14");
                e.target.setAttribute("id", "miss14");
        }
     else   if (e.target.getAttribute("id")=="miss14"){
            e.target.setAttribute("class", "miss15");
                e.target.setAttribute("id", "miss15");
        }
      else  if (e.target.getAttribute("id")=="miss15"){
            e.target.setAttribute("class", "miss16");
                e.target.setAttribute("id", "miss16");
        }
    else if(e.target.getAttribute("id")=="miss16"){
        localStorage.setItem("#li5",1);
        $("#li5").css("color", "black");
        $("#li5").mouseenter(function () {
            $("#li5").css("cursor", "pointer");
          });
    }
}