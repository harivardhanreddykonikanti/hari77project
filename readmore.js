function boxbutton() {
    var dotss = document.getElementById("dots");
    var readmoretext = document.getElementById("dispalymoretext");
    var button = document.getElementById("boxbutton");
    if (dotss.style.display === "none"){
        dotss.style.display ="inline";
        readmoretext.style.display="none";
        button.innerHTML="read more";
    }
    else {
        dotss.style.display ="none";
        readmoretext.style.display="inline";
        button.innerHTML="read less";
    }
}
function boxbutton2() {
    var dotss2 = document.getElementById("dots2");
    var readmoretext2 = document.getElementById("dispalymoretext2");
    var button2 = document.getElementById("boxbutton2");
    if (dotss2.style.display === "none"){
        dotss2.style.display ="inline";
        readmoretext2.style.display="none";
        button2.innerHTML="read more";
    }
    else {
        dotss2.style.display ="none";
        readmoretext2.style.display="inline";
        button2.innerHTML="read less";
    }

}

