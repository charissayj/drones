import { Car } from "../classes/car.js"
import { Drone } from "../classes/drone.js"

export class FleetDataService {
  constructor(){
    this.cars = [];
    this.drones = [];
  }

  loadData(fleet) {
    for (let data of fleet){
      switch (data.type) {
        case "car":
          let car = this.loadCar(data);
          this.cars.push(car);
          break;
        case "drone":
          let drone = this.loadDrone(data);
          this.drones.push(drone);
          break;
      }
    }
  }

  loadCar(car){
    let newCar = new Car(car.license, car.model, car.latlong);
    newCar.miles = car.miles;
    newCar.make = car.make
    return newCar;
  }

  loadDrone(drone){
    let newDrone = new Drone(drone.license, drone.model, drone.latlong);
    newDrone.airTimeHours = drone.airTimeHours;
    newDrone.base = drone.base;
    return newDrone;
  }
}