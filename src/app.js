class Vehicle {
  constructor() {
    this.gpsEnabled = true;
  }
}

class Drone extends Vehicle {}

class Car extends Vehicle {
  constructor() {
    super();
    this.gpsEnabled = false;
  }
}

let car = new Car("A123");

console.log(car.gpsEnabled);
