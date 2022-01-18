/******************ARRAYS*/
const ar = [2,100,9,80];
//ar.sort(function(a, b){
//    return a-b;
//});
ar.sort((a,b) => a-b)
console.log(`ar is ${ar.toString()}`);
/* HW 12*/
const arHw =[13,28,4,15,25,-10,40,17,27];
//expected [-10,4,28,40,27,25,17,15,13]
//task: write a comparator(a comparator returns  <0 if first less than second >0)
//if first greater than second ,==0 if first equals second 


/*ADDING ELEMENTS AT END OF AN ARRAY*/
ar[ar.length]= 200;
console.log(ar);
ar.push(300,25);
console.log(ar);
const ar1 = [-8,30,-57];
//ar.push(ar1); there will be added but not separated numbers
//if you waant to add separated numbers you should apply a spead operator...
ar.push (...ar1);
console.log (ar);
//  в начало добавляет элементы unshift
const ar2 =[27,35];
ar.unshift(....ar2);
console.log(ar);
//метод  работает для середины splice 
ar.splice(2,0,1,2);
console.log(ar);
//УДАЛЕНИЕ 
//последнего элемента в массиве pop
let el =ar.pop();
// первого элемента   массиве 
el = ar.shift();
console.log(el,ar);
ar.splice(3,5); //удаление 5 элементов начиная с 3
console.log(ar);
//includes,indexOf

//two dimensional arrays
const matrix1 =[[1,2,3],[4,5,6],[7,8,9],[3,4,5]];
const matrix2 =[[100,20],[50,-5],[34,28]];
function displayMatrix(matrix){
    for (let i=0;i<matrix.length;i++){
        let row ='';
        for (let j=0;j<matrix[i].length;j++){
row=row+matrix[i][j] + ' '
        }
        console.log(row);
    }}
displayMatrix(matrix2);
//HOMEWORK12//
//написать функцию принимающие матрицу и возвращающую транспортированную матрицу троки столбцами, а столбцы строками