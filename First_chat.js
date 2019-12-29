
function clickpic(e) {
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x,y);
        if (e.target.getAttribute("id")=="chat1"){
            e.target.setAttribute("class", "chat2");
                e.target.setAttribute("id", "chat2");
        }
        else if (e.target.getAttribute("id")=="chat2"){
                e.target.setAttribute("class", "chat3");
                    e.target.setAttribute("id", "chat3");
            }
         else   if (e.target.getAttribute("id")=="chat3"){
                e.target.setAttribute("class", "chat4");
                    e.target.setAttribute("id", "chat4");
            }
         else   if (e.target.getAttribute("id")=="chat4"){
                e.target.setAttribute("class", "chat5");
                    e.target.setAttribute("id", "chat5");
            }
          else  if (e.target.getAttribute("id")=="chat5"){
                e.target.setAttribute("class", "chat6");
                    e.target.setAttribute("id", "chat6");
            }
        else if(e.target.getAttribute("id")=="chat6"){
                localStorage.setItem("#li3",1);
                $("#li3").css("color", "black");
                $("#li3").mouseenter(function () {
                        $("#li3").css("cursor", "pointer");
                      });
        }
    }
