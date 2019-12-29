function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
        if (e.target.getAttribute("id")=="ball_0"){
        e.target.setAttribute("class", "ball_1");
            e.target.setAttribute("id", "ball_1");
    }
    else if(e.target.getAttribute("id")=="ball_1"){
        localStorage.setItem("#li2",1);
        $("#li2").css("color", "black");
        $("#li2").mouseenter(function () {
            $("#li2").css("cursor", "pointer");
          });
    }
}