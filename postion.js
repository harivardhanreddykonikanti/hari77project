function quant() {
    var quantbutton=document.getElementById("quantbutton");
    var quant=document.getElementById("quant");
    var reasoning=document.getElementById("reason");
    var english=document.getElementById("english");
    var gk=document.getElementById("gk");
    quant.style.display="inline";
    reasoning.style.display="none";
    english.style.display="none";
    gk.style.display="none";

}
function reasoning() {
    var reasonbutton=document.getElementById("reasonbutton");
    var quant=document.getElementById("quant");
    var reasoning=document.getElementById("reason");
    var english=document.getElementById("english");
    var gk=document.getElementById("gk");
    quant.style.display="none";
    reasoning.style.display="inline";
    english.style.display="none";
    gk.style.display="none";

}
function english() {
    var englishbutton=document.getElementById("englishbutton");
    var quant=document.getElementById("quant");
    var reasoning=document.getElementById("reason");
    var english=document.getElementById("english");
    var gk=document.getElementById("gk");
    quant.style.display="none";
    reasoning.style.display="none";
    english.style.display="inline";
    gk.style.display="none";
}
function gk() {
    var gkbutton=document.getElementById("gkbutton");
    var quant = document.getElementById("quant");
    var reasoning = document.getElementById("reason");
    var english = document.getElementById("english");
    var gk=document.getElementById("gk");
    quant.style.display = "none";
    reasoning.style.display = "none";
    english.style.display = "none";
    gk.style.display="inline";
}
function submit() {
    alert(`your exam submitted successfully`);

}