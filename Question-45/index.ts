interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
  const car: Car = { manufacturer, model };

  options.forEach(([key, value]) => {
    car[key] = value;
  });

  return car;
}

const car1 = createCar("Toyota", "Camry", ["color", "silver"], ["year", 2022]);
console.log(car1);

const car2 = createCar("Honda", "Civic", ["color", "black"], ["transmission", "automatic"], ["features", ["moonroof", "backup camera"]]);
console.log(car2);
