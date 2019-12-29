function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="confess1"){
        e.target.setAttribute("class", "confess2");
            e.target.setAttribute("id", "confess2");
    }
    else if (e.target.getAttribute("id")=="confess2"){
        e.target.setAttribute("class", "confess3");
            e.target.setAttribute("id", "confess3");
    }
    else if (e.target.getAttribute("id")=="confess3"){
            e.target.setAttribute("class", "confess4");
                e.target.setAttribute("id", "confess4");
        }
     else   if (e.target.getAttribute("id")=="confess4"){
            e.target.setAttribute("class", "confess5");
                e.target.setAttribute("id", "confess5");
        }
     else   if (e.target.getAttribute("id")=="confess5"){
            e.target.setAttribute("class", "confess6");
                e.target.setAttribute("id", "confess6");
        }
      else  if (e.target.getAttribute("id")=="confess6"){
            e.target.setAttribute("class", "confess7");
                e.target.setAttribute("id", "confess7");
        }
        else  if (e.target.getAttribute("id")=="confess7"){
            e.target.setAttribute("class", "confess8");
                e.target.setAttribute("id", "confess8");
        }
        else  if (e.target.getAttribute("id")=="confess8"){
            e.target.setAttribute("class", "confess9");
                e.target.setAttribute("id", "confess9");
        }
        else  if (e.target.getAttribute("id")=="confess9"){
            e.target.setAttribute("class", "confess10");
                e.target.setAttribute("id", "confess10");
        }
        else  if (e.target.getAttribute("id")=="confess10"){
            e.target.setAttribute("class", "confess11");
                e.target.setAttribute("id", "confess11");
        }
        else  if (e.target.getAttribute("id")=="confess11"){
            e.target.setAttribute("class", "confess12");
                e.target.setAttribute("id", "confess12");
        }
        else  if (e.target.getAttribute("id")=="confess12"){
            e.target.setAttribute("class", "confess13");
                e.target.setAttribute("id", "confess13");
        }
        else  if (e.target.getAttribute("id")=="confess13"){
            e.target.setAttribute("class", "confess14");
                e.target.setAttribute("id", "confess14");
        }
        else  if (e.target.getAttribute("id")=="confess14"){
            e.target.setAttribute("class", "confess15");
                e.target.setAttribute("id", "confess15");
        }
        else  if (e.target.getAttribute("id")=="confess15"){
            e.target.setAttribute("class", "confess16");
                e.target.setAttribute("id", "confess16");
        }
        else  if (e.target.getAttribute("id")=="confess16"){
            e.target.setAttribute("class", "confess17");
                e.target.setAttribute("id", "confess17");
        }
        
    else if(e.target.getAttribute("id")=="confess17"){
        localStorage.setItem("#li6",1);
        $("#li6").css("color", "black");
        $("#li6").mouseenter(function () {
            $("#li6").css("cursor", "pointer");
          });
    }
}