console.log("Hello World");
/*for(var i=0;i<3;i++)
setTimeout(function(){
    console.log(i);
})*/

/*for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    })
}*/

const fun = function(a, b){
    return a + b;
}
let a=5;
//console.log(a**2);
//console.log(fun(10,20));
//console.log(a(10,20));error
//console.log(fun**2);NaN
//console.log("12"+12);
//console.log("12"-12);
//console.log("ab"-12);
//console.log(`+"12"+12 = $ {+"12"+12}`)

//HOMEWORK:
console.log(("a" + + "a" +'a'+'s').toLowerCase());



function calc(num1,num2,num3) {

    if(num2 =="+"){
        return num1 + num3;}
else if (num2 =="-"){
    return num1 - num3;} 
else if (num2 == "*"){
    return num1 * num3;}
else if(num2 =="/"){
    return num1/num3;}

}
console.log(calc(10,'+',5));



function sum(a){
    return (b) => a + b
}
console.log(sum(10,3))