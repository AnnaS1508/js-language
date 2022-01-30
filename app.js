                            //#1//
 const arrayString =["bc", "lmn", "d", "lmn", "a", "lmn", "a"] ;
 function displayOccurences(array){
     const res= createObj(array);
     Object.entries(res).sort((e1,e2) =>{
         const res = e2[1] - e1[1];
         return res === 0 ? e1[0].localeCompare(e2[0]) : res;

     }).forEach(e => console.log( `${e[0]}->${e[1]}`));
}    

function createObj (array){
    return array.reduce ((result, element) => { result[element] = result[element] === undefined ? 1 : result[element]+1;return result}, {});

}
displayOccurences(arrayString);



                    //#2//
function countBy (array,callbackFunc){

    const res = array.reduce((result,element) => {result[callbackFunc(element)] = result[callbackFunc(element)] ===undefined ? 1 : result[callbackFunc(element)] +1;return res}{});
    return res;
}

const arr1 =[6.4,7.3,6.5,6.9];
let statistics = countBy(arr1, element =>Math.floor(element));
console.log(statistics);

const arr2 =['abcd', 'lmnr', 'ab', 'ddddd'];
statistics =countBy(arr2, element =>element.lenght);
console.log(statistics);

const arr3= [{age : 25, id : 123, name : "Vasya"}, {age : 50, id : 123, name : "Petya"}, {age : 50, id : 123, name : "Petya"}, {age : 70, id : 123, name : "Olya"}];
statistics =countBy(arr3, element => element.name);
console.log( statistics);
