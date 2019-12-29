
function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="perist11"){
        e.target.setAttribute("class", "perist12");
            e.target.setAttribute("id", "perist12");
    }
    else if (e.target.getAttribute("id")=="perist12"){
            e.target.setAttribute("class", "perist13");
                e.target.setAttribute("id", "perist13");
        }
     else   if (e.target.getAttribute("id")=="perist13"){
            e.target.setAttribute("class", "perist14");
                e.target.setAttribute("id", "perist14");
        }
     else   if (e.target.getAttribute("id")=="perist14"){
            e.target.setAttribute("class", "perist15");
                e.target.setAttribute("id", "perist15");
        }
      else  if (e.target.getAttribute("id")=="perist15"){
            e.target.setAttribute("class", "perist16");
                e.target.setAttribute("id", "perist16");
        }
        else  if (e.target.getAttribute("id")=="perist16"){
            e.target.setAttribute("class", "perist17");
                e.target.setAttribute("id", "perist17");
        }
        else  if (e.target.getAttribute("id")=="perist17"){
            e.target.setAttribute("class", "perist18");
                e.target.setAttribute("id", "perist18");
        }
        else  if (e.target.getAttribute("id")=="perist18"){
            e.target.setAttribute("class", "perist19");
                e.target.setAttribute("id", "perist19");
        }
    /*else if(e.target.getAttribute("id")=="perist19"){
            localStorage.setItem("#lip1",1);
            $("#lip1").css("color", "black");
            $("#lip1").mouseenter(function () {
                    $("#lip1").css("cursor", "pointer");
                  });
    }*/
}
