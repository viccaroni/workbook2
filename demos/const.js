//const and let is the same as var but it cant be changed
const firstName = "Dana";
let count = 0;
let message;
count++; // valid
message = "Hello " + firstName; // valid
console.log(message);
//cantoverrun a variable thats already taken 
firstName = "Mark";