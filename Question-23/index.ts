let x = 5;
let y = 10;
let z = '5';

console.log("Is x equal to y? I predict False.");
console.log(x == y);

console.log("Is x not equal to y? I predict True.");
console.log(x != y);

console.log("Is x strictly equal to z? I predict False.");
console.log(x === z);

console.log("Is x less than or equal to y? I predict True.");
console.log(x <= y);

console.log("Is y greater than x? I predict True.");
console.log(y > x);

console.log("Is x less than y and z is not equal to y? I predict True.");
console.log(x < y && z != y);

console.log("Is x greater than y or z is not equal to x? I predict True.");
console.log(x > y || z != x);

console.log("Is z loosely equal to true? I predict False.");
console.log(z == true);

console.log("Is y strictly not equal to z? I predict True.");
console.log(y !== z);

console.log("Is x greater than or equal to y or z is equal to 5? I predict True.");
console.log(x >= y || z === '5');