function result1() {
    var input1= document.getElementById("a1").value;
    var input2=document.getElementById("a2").value;
    var output=document.getElementById("add");
    var sum= parseInt(input1)+parseInt(input2) ;
        output.innerHTML=sum;
}
function resetall() {
    document.getElementById("a1").value=0;
    document.getElementById("a2").value=0;
    document.getElementById("b1").value=0;
    document.getElementById("b2").value=0;
    document.getElementById("c1").value=0;
    document.getElementById("c2").value=0;
    document.getElementById("d1").value=0;
    document.getElementById("d2").value=0;
    var output=document.getElementById("add");
    var output2=document.getElementById("sub");
    var output3=document.getElementById("mul");
    var output4=document.getElementById("div");
    output.innerHTML="RESULT";
    output2.innerHTML="RESULT";
    output3.innerHTML="RESULT";
    output4.innerHTML="RESULT";
}
function reset() {
    document.getElementById("a1").value = 0;
    document.getElementById("a2").value = 0;
    var output=document.getElementById("add");
    output.innerHTML = "RESULT";
}
function reset2() {
    document.getElementById("b1").value = 0;
    document.getElementById("b2").value = 0;
    var output2=document.getElementById("sub");
    output2.innerHTML = "RESULT";
}
function reset3() {
    document.getElementById("c1").value = 0;
    document.getElementById("c2").value = 0;
    var output3=document.getElementById("mul");
    output3.innerHTML = "RESULT";
}
function reset4() {
    document.getElementById("d1").value = 0;
    document.getElementById("d2").value = 0;
    var output4=document.getElementById("div");
    output4.innerHTML = "RESULT";
}
function result2() {
    var input1= document.getElementById("b1").value;
    var input2=document.getElementById("b2").value;
    var output=document.getElementById("sub");
    var minus= parseInt(input1)-parseInt(input2) ;
    output.innerHTML=minus;
}
function result3() {
    var input1= document.getElementById("c1").value;
    var input2=document.getElementById("c2").value;
    var output=document.getElementById("mul");
    var into= parseInt(input1)*parseInt(input2) ;
    output.innerHTML=into;
}
function result4() {
    var input1= document.getElementById("d1").value;
    var input2=document.getElementById("d2").value;
    var output=document.getElementById("div");
    var by= parseInt(input1)/parseInt(input2) ;
    output.innerHTML=by;
}