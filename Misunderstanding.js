
function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="miss1"){
        e.target.setAttribute("class", "miss2");
            e.target.setAttribute("id", "miss2");
    }
    else if (e.target.getAttribute("id")=="miss2"){
            e.target.setAttribute("class", "miss3");
                e.target.setAttribute("id", "miss3");
        }
     else   if (e.target.getAttribute("id")=="miss3"){
            e.target.setAttribute("class", "miss4");
                e.target.setAttribute("id", "miss4");
        }
     else   if (e.target.getAttribute("id")=="miss4"){
            e.target.setAttribute("class", "miss5");
                e.target.setAttribute("id", "miss5");
        }
      else  if (e.target.getAttribute("id")=="miss5"){
            e.target.setAttribute("class", "miss6");
                e.target.setAttribute("id", "miss6");
        }
    else if(e.target.getAttribute("id")=="miss6"){
        localStorage.setItem("#li4",1);
        $("#li4").css("color", "black");
        $("#li4").mouseenter(function () {
            $("#li4").css("cursor", "pointer");
          });
    }
}
