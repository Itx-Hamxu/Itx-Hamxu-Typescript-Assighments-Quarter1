const myArray: string[] = ['apple', 'banana', 'orange'];

// Accessing an index that is out of bounds will cause an array index error
console.log(myArray[3]); // This will produce an array index error

// To fix the error, we need to access a valid index
console.log(myArray[2]); // This will print 'orange'
