function readmore() {
    var dots=document.getElementById("dotts");
    var extratext=document.getElementById("readmoretext");
    var button=document.getElementById("readmorebutton");
    if(dots.style.display==="none")
    {
        button.innerHTML="READMORE";
        extratext.style.display="none";
        dots.style.display="inline";
    }

        else{
        button.innerHTML="READLESS";
        dots.style.display="none";
        extratext.style.display="inline";

    }

}