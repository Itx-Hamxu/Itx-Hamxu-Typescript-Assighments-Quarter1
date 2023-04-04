const placesToVisit = ["Japan", "Iceland", "Australia", "Peru", "Egypt"];

console.log("Original order:", placesToVisit);

const sortedPlaces = [...placesToVisit].sort();

console.log("Alphabetical order:", sortedPlaces);

console.log("Original order:", placesToVisit);

const reverseSortedPlaces = [...placesToVisit].sort().reverse();

console.log("Reverse alphabetical order:", reverseSortedPlaces);

console.log("Original order:", placesToVisit);

placesToVisit.reverse();

console.log("Reversed order:", placesToVisit);

placesToVisit.reverse();

console.log("Original order:", placesToVisit);

const sortedPlacesAgain = [...placesToVisit].sort();

console.log("Alphabetical order:", sortedPlacesAgain);

const reverseSortedPlacesAgain = [...placesToVisit].sort().reverse();

console.log("Reverse alphabetical order:", reverseSortedPlacesAgain);
