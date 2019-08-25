class Vehicle {
  start() {
    console.log("starting vehicle...");
  }

  static getCompanyName(){
    console.log("My company");
  }
}

class Car extends Vehicle {
  start() {
    super.start();
    console.log("Starting car...");
  }
  static getCompanyName() {
    super.getCompanyName()
    console.log("My other company");
  }
}

let car = new Car("A123");
car.start();
Car.getCompanyName();