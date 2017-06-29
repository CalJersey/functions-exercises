// TODO: add your solutions here!

//Concatenation
function conCat(str1,str2){
    let strNew = str1 + str2;
    console.log(strNew);
    return strNew;
}

conCat('poop','deck');

//Phrase Repeat
function nRepeat(phrase,numTimes){

    for (i=1; i<=numTimes; i++){
        console.log(phrase);
    }
}

nRepeat('DOH!',7);

//New Power
function myPower(operator,exponent){
    let result = 1;
    for (i=1; i<=exponent;i++){
        result = result * operator;
    }
    return result;
}

myPower(7,40);

//Area calculations
function areaEr(rad){
    return (Math.PI * Math.pow(rad,2));
}

areaEr(0);
areaEr(1234);

//Pythagorean Theorem
function pythag(a,b){
    let c = Math.pow(a,2) + Math.pow(b,2);
    return c;
}

pythag(3,4);
pythag(457,98);
