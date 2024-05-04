function tip() {
    let submit=document.getElementById("calculate");
    let a=document.getElementById("bill").value;
    let b=document.getElementById("percent").value;
    if (submit.innerHTML=="CALCULATE") {
        let c = (parseInt(a) * (parseInt(b) / 100));
        let d = parseInt(c) + parseInt(a);
        document.getElementById("result").innerHTML = `TOTAL TIP IS ${c} TOTAL AMOUNT TO BE PAID IS ${d}`;
        submit.innerHTML = "RESET";
    }
    else {
        submit.innerHTML = "CALCULATE";
        document.getElementById("bill").value=0;
        document.getElementById("percent").value=0

    }

}
