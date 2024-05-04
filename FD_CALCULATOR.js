function fdcal() {
    let a=document.getElementById("principal").value;
    let b=document.getElementById("intrest").value;
    let c=document.getElementById("tenure").value;
    var button=document.getElementById("submit");
    console.log(a);
    console.log(b);
    console.log(c);
    if (button.innerHTML=="CALCULATE") {
        let d = (((parseInt(a) * parseInt(b) * parseInt(c)) / 100) + parseInt(a));
        console.log(`the total amount is ${d}`);
        document.getElementById("result").value = d;
        button.innerHTML = "RESET";
    }
    else {
        document.getElementById("principal").value=0;
        document.getElementById("intrest").value=0;
        document.getElementById("tenure").value=0;
        document.getElementById("result").value=0;
        button.innerHTML="CALCULATE";
    }



}