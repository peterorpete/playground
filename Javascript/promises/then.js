//Method
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/promises/exercises/then?action=resume_content_item

let prom = new Promise((resolve, reject) => {
   let num = Math.random();
   if (num < .5 ){
     resolve('Yay!');
   } else {
     reject('Ohhh noooo!');
   }
 });
 
 const handleSuccess = (resolvedValue) => {
   console.log(resolvedValue);
 };
 
 const handleFailure = (rejectionReason) => {
   console.log(rejectionReason);
 };
 
 prom.then(handleSuccess, handleFailure);