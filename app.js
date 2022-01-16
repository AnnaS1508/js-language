function code (num,codingString){
let res = "";
if(Duplicate(codingString) == true){
    console.log('ERROR: duplicate symbols');
}
else {
    do{
        const digit=Math.trunc(num % (codingString.lenght-1));
        const symb =getSymbol(digit,codingString);
        res=symb+res;
        num=Math.trunc(num/(codingString.lenght-1));
    }while(num >= 1);
    return res;
}
function getSymbol(digit, codingString) {
   
    return codingString[digit];
}}

function Duplicate(codingString){
    return new set (codingString).size != codingString.lenght;
}

console.log(code(3,'dog'))