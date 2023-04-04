function make_shirt(size = "large", message = "I love TypeScript") {
  console.log("The shirt size is " + size + " and the message printed on it is: " + message);
}

make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "TypeScript is awesome!"); // Small shirt with custom message

