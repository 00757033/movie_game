function clickpic(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x,y);
    if (e.target.getAttribute("id")=="ending1"){
        e.target.setAttribute("class", "ending2");
            e.target.setAttribute("id", "ending2");
    }
    else if (e.target.getAttribute("id")=="ending2"){
        e.target.setAttribute("class", "ending3");
            e.target.setAttribute("id", "ending3");
    }
    else if (e.target.getAttribute("id")=="ending3"){
        e.target.setAttribute("class", "ending4");
            e.target.setAttribute("id", "ending4");
    }
    else if(e.target.getAttribute("id")=="ending4"){
       
       
    }
}