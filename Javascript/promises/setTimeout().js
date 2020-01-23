// Node API
// https://www.codecademy.com/courses/introduction-to-javascript/lessons/promises/exercises/settimeout?action=resume_content_item
console.log("This is the first line of code in app.js.");

function usingSTO() {
  console.log("Bellllllo.");
}

setTimeout(usingSTO, 2000);  ///usingSTO() function will appear seconds in so after the last line of code console.log

console.log("This is the last line of code in app.js.");