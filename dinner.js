
function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="perist1"){
        e.target.setAttribute("class", "perist2");
            e.target.setAttribute("id", "perist2");
    }
    else if (e.target.getAttribute("id")=="perist2"){
            e.target.setAttribute("class", "perist3");
                e.target.setAttribute("id", "perist3");
        }
     else   if (e.target.getAttribute("id")=="perist3"){
            e.target.setAttribute("class", "perist4");
                e.target.setAttribute("id", "perist4");
        }
     else   if (e.target.getAttribute("id")=="perist4"){
            e.target.setAttribute("class", "perist5");
                e.target.setAttribute("id", "perist5");
        }
      else  if (e.target.getAttribute("id")=="perist5"){
            e.target.setAttribute("class", "perist6");
                e.target.setAttribute("id", "perist6");
        }
        else  if (e.target.getAttribute("id")=="perist6"){
            e.target.setAttribute("class", "perist7");
                e.target.setAttribute("id", "perist7");
        }
        else  if (e.target.getAttribute("id")=="perist7"){
            e.target.setAttribute("class", "perist8");
                e.target.setAttribute("id", "perist8");
        }
        else  if (e.target.getAttribute("id")=="perist8"){
            e.target.setAttribute("class", "perist9");
                e.target.setAttribute("id", "perist9");
        }
    else if(e.target.getAttribute("id")=="perist9"){
            localStorage.setItem("#lip1",1);
            $("#lip1").css("color", "black");
            $("#lip1").mouseenter(function () {
                    $("#lip1").css("cursor", "pointer");
                  });
    }
}
