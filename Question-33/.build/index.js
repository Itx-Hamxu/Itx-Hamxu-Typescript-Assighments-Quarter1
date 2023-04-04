"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  let ordinal_ending;
  if (numbers[i] === 1) {
    ordinal_ending = "st";
  } else if (numbers[i] === 2) {
    ordinal_ending = "nd";
  } else if (numbers[i] === 3) {
    ordinal_ending = "rd";
  } else {
    ordinal_ending = "th";
  }
  console.log(numbers[i] + ordinal_ending);
}
//# sourceMappingURL=index.js.map
