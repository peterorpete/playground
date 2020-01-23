const inventory = {
   sunglasses: 1900,
   pants: 1088,
   bags: 1344
 };
 
 
 function myExecutor(resolve, reject) {
   if(inventory.sunglasses > 0) {
       resolve('Sunglasses order processed.');
   } else {
       reject('That item is sold out.');
   }
 };
 
 function orderSunglasses()  {
   return new Promise(myExecutor);
 };
 
 const orderPromise = orderSunglasses();
 console.log(orderPromise);
 
 // Node app.js to see result
