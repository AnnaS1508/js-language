       //#1//

function randomInteger (min,max){
  let rand = min-0.5+Math.random()*(max-min+1);
  return Math.round(rand);
}
console.log(randomInteger(1,3));
  
      //#1//
function randomInteger (min,max){
  let rand = min+Math.random()*(max*1-min);
  return Math.floor(rand);
}   
console.log(randomInteger(1,3));   

       //#2//
 function concatinate(prefix)   {
   const res ='' +prefix;
   return function(m){return res+m};

  const concatApp=concatinate('App-');
  const concatMessage =concatApp('Test status:Done');
  console.log(concatMessage);
 }   


  
  

  
  



  
  

  
  