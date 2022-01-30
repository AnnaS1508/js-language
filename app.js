//#1
console.log("#1->");
const array = [1,2,3,4,5];

function Myfilter(ar, callback) {
    const NewArr = []; 
    for(let i=0;i<ar.length;i++){
            const result = callback(ar[i], i, array); 
            if(result)NewArr.push(ar[i]);
        }   
        console.log(NewArr);
    return NewArr;
}

function callbackFilt(n, i, a) {
    if(a[i]%2==1){
        return n;
    }
}
Myfilter(array, callbackFilt);
//#2
console.log("#2->");
const array1 = [1,2,3,4,5];
const sumReducer = (previousValue, currentValue) => previousValue + currentValue;
function MyReduce(ar, callback, initResult){
    let result = initResult == undefined ? 0 : initResult;
    for(let i=0;i<ar.length;i++){
        result = callback(result, ar[i], i, ar); 
    }
    return result;
}
const sum = MyReduce(array1, sumReducer, 17);
console.log(sum);

////////////////////#3
 function getPersonsCity(persons, city) {
         return persons.filter(p => p.address.city === city);
 }
 console.log(getPersonsCity(persons, 'Rehovot'));

 //////////#4 
 function movePersonsNoCityAtBeginning(persons, city) {
         const personsRes = getPersonsCity(persons, city);
        personsRes.unshift(...persons.filter(p => p.address.city !== city));
         return personsRes;
 }
 console.log(movePersonsNoCityAtBeginning(persons,  'Rehovot'));
