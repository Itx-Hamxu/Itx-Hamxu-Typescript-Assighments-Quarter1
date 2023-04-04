"use strict";
function createCar(manufacturer, model, ...options) {
  const car = { manufacturer, model };
  options.forEach(([key, value]) => {
    car[key] = value;
  });
  return car;
}
const car1 = createCar("Toyota", "Camry", ["color", "silver"], ["year", 2022]);
console.log(car1);
const car2 = createCar("Honda", "Civic", ["color", "black"], ["transmission", "automatic"], ["features", ["moonroof", "backup camera"]]);
console.log(car2);
//# sourceMappingURL=index.js.map
