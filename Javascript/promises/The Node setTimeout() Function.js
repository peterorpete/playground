// providing you with functions that return promises which settle after some time
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/promises/exercises/settimeout?action=resume_content_item

// setTimeout() has two parameters: a callback function and a delay in milliseconds.

const delayedHello = () => {
   console.log('Hi! This is an asynchronous greeting!');
 };
 
 setTimeout(delayedHello, 2000);

 //////////
 
 const returnPromiseFunction = () => {
   return new Promise((resolve, reject) => {
     setTimeout(( ) => {resolve('I resolved!')}, 1000);
   });
 };
 
 const prom = returnPromiseFunction();