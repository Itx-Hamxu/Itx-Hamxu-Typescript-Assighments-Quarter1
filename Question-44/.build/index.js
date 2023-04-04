"use strict";
function orderSandwich(...items) {
  console.log("You ordered a sandwich with:");
  for (let item of items) {
    console.log("- " + item);
  }
  console.log("Enjoy your sandwich!");
}
orderSandwich("ham", "cheese", "lettuce");
orderSandwich("turkey", "avocado");
orderSandwich("peanut butter", "jelly", "banana");
//# sourceMappingURL=index.js.map
