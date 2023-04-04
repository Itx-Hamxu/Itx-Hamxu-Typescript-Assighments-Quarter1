let carMake = 'Toyota';
let carModel = 'Corolla';
let age = 5;
let colors = ['red', 'blue', 'green'];

// Equality and inequality tests with strings
console.log(`Is the car make ${carMake} equal to 'Toyota'? I predict True.`);
console.log(carMake == 'Toyota');

console.log(`Is the car make ${carMake} not equal to 'Honda'? I predict True.`);
console.log(carMake != 'Honda');

console.log(`Is the car model ${carModel} equal to 'Camry'? I predict False.`);
console.log(carModel == 'Camry');

console.log(`Is the car model ${carModel} not equal to 'Corolla'? I predict False.`);
console.log(carModel != 'Corolla');

// Tests using the lower case function
console.log(`Is the car make ${carMake} equal to 'toyota'? I predict True.`);
console.log(carMake.toLowerCase() == 'toyota');

console.log(`Is the car model ${carModel} equal to 'corolla'? I predict True.`);
console.log(carModel.toLowerCase() == 'corolla');

// Numerical tests
console.log(`Is the age ${age} greater than 3? I predict True.`);
console.log(age > 3);

console.log(`Is the age ${age} less than 2? I predict False.`);
console.log(age < 2);

console.log(`Is the age ${age} greater than or equal to 5? I predict True.`);
console.log(age >= 5);

console.log(`Is the age ${age} less than or equal to 4? I predict False.`);
console.log(age <= 4);

// Tests using "and" and "or" operators
console.log(`Is the car make ${carMake} equal to 'Toyota' and the car model ${carModel} equal to 'Corolla'? I predict True.`);
console.log(carMake == 'Toyota' && carModel == 'Corolla');

console.log(`Is the car make ${carMake} equal to 'Honda' or the car model ${carModel} equal to 'Camry'? I predict False.`);
console.log(carMake == 'Honda' || carModel == 'Camry');

// Test whether an item is in an array
console.log(`Is the color 'red' in the colors array? I predict True.`);
console.log(colors.includes('red'));

console.log(`Is the color 'black' in the colors array? I predict False.`);
console.log(colors.includes('black'));

// Test whether an item is not in an array
console.log(`Is the color 'yellow' not in the colors array? I predict True.`);
console.log(!colors.includes('yellow'));

console.log(`Is the color 'red' not in the colors array? I predict False.`);
console.log(!colors.includes('red'));
