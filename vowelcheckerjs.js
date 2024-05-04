function findvowels() {
    var text=document.getElementById("textarea").value;
    var vowelcount=0;
    text=text.toLowerCase();
    console.log(text);
    console.log(text.length);
    for (var i=0;i<text.length;i++)
    {
        var char=text.charAt(i);
        if (isvowel(char))
        {
            vowelcount++;

        }
    }
    var result=document.getElementById("result");
    result.textContent=`TOTAL VOWEL IS = ${vowelcount}`;


}
function isvowel(char) {
    var vowels=["a","e","i","o","u"];
    return vowels.includes(char);
}