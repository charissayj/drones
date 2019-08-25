class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}


let drone = new Drone("A123", "Flyer");
console.log(drone instanceof Drone);
console.log(drone.id);
console.log(drone.name);