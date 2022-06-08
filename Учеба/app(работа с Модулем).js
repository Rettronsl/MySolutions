var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`);

var greeting2 = require("./greeting.js");
greeting2.name = "Bob";

console.log(`Hello ${greeting2.name}`);

// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`);