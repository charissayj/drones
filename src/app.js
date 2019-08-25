class Vehicle {
  constructor(licenseNumber){
    this.licenseNumber = licenseNumber;
  }
}

class Drone extends Vehicle {}

class Car extends Vehicle {
  constructor(licenseNumber) {
    super(licenseNumber);
    console.log("car");
  }
}

let car = new Car("A123");

console.log(car.licenseNumber)
