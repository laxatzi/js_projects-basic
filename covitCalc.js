function double(n){
   return n *2;
 }
 let covitHostNow= 60000;
 let check = 100
   for(let i =0; i<=30; i++){
     check =  0.5 * check;
    
 }

 console.log(check);

   for(let j =0; j<=12; j++){
     covitHostNow = double(covitHostNow);
  }
 
 //console.log(covitHostNow);
 
 function percent(n,p){
   return (n*p)/100;
 }
 
 //console.log(percent(covitHostNow, 2));
