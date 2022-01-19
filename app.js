 var a = [13,28,4,15,25,-10,40,17,27];
 let odd = a.filter(x =>x%2).sort((a,b) =>b-a);
 let even = a.filter(x =>!(x%2)).sort((a,b) =>a-b);
 let res = [...even,...odd]
 console.log(res);



 function transposeArray(array, arrayLength){ 
     var newArray = []; for(var i = 0; i < array.length; i++){
          newArray.push([]); }; for(var i = 0; i < array.length; i++){ 
              for(var j = 0; j < arrayLength; j++){ newArray[j].push(array[i][j]); 
            }; }; 
 return newArray};