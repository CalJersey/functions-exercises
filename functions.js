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

//Modulus
function isDivisible(x,y){
    return !(x%y);
}

isDivisible(4,3);

//Vowel Counting
function vowelCount(str){
    let numVowels = 0;
    let arVowels = ["a","e","i","o","u","y"];
    let retObj = {a:0,e:0,i:0,o:0,u:0,y:0};
    let arStr = str.toLowerCase().slice();

    for (i=0;i<arStr.length; i++){
        if(arVowels.indexOf(arStr[i])>=0){
            retObj[arStr[i]]++;
        }
    }
    return retObj;
}

vowelCount("Aaeeiouuosayyyajhdqouwdhoqoaoeys");

//WDI
function hasWDI(arr){
    if(arr.indexOf('wdi') < 0){return false;} else{return true;}
}

hasWDI([9,'Bart Simpson', true, 'wdi']);
findWdi(['a','b','c']);

//longest word
function longestWord(sent){
    let arSent = sent.split(' ');
    let longest = "a";

    for(i=0;i<arSent.length;i++){
        if (arSent[i].length > longest.length){
            longest = arSent[i];
        }

    }
    return longest;
}
longestWord("Given a string representing a sentence, return the longest word in that sentence");

//Triangle
function displayTri(levels){

    for(i=1;i<=levels;i++){
        let thisLevel = "";
        for(j=1;j<=i;j++){
            thisLevel = thisLevel + "*";
        }
        console.log(thisLevel);
    }
}

displayTri(6);
