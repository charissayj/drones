class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static getCompany() {
    console.log("in getCompany");
  }

  fly() {
    console.log(`Drone ${this.id} is flying`);
  }
}

// Static properties
Drone.maxHeight = 2000;


let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B123", "DroneB");
console.log(drone instanceof Drone);
console.log(drone.id);
console.log(drone.name);
console.log(drone2.id);
console.log(drone2.name);
console.log(Drone.maxHeight);

drone.fly()
drone2.fly();

Drone.getCompany();