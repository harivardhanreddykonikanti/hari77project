function passgen() {
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const  numbers="0123456789";
    const symbols="!@#$%^&*()_+";
    const lengthEL=document.getElementById("length");
    const lowercaseEL=document.getElementById("lowercase");
    const uppercaseEL=document.getElementById("uppercase");
    const numbersEL=document.getElementById("numbers");
    const symbolsEL=document.getElementById("symbols");
    const passwordEL=document.getElementById("password");
    let charc="";
    let password="";
    if (lowercaseEL.checked){
        charc +=lowercase;
    }
    if (uppercaseEL.checked){
        charc +=uppercase;
    }
    if (numbersEL.checked){
        charc +=numbers;
    }
    if (symbolsEL.checked){
        charc +=symbols;
    }
    for (let i=0;i<lengthEL;i++){
        password +=charc.charAt(math.floor(math.random()*charc.length))
    }
   passwordEL=password;



}