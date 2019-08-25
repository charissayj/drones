import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "../services/data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          let car = this.loadCar(data);
          this.cars.push(car);
          break;
        case "drone":
          let drone = this.loadDrone(data);
          this.drones.push(drone);
          break;
        default:
          let error = new DataError("Invalid vehicle type:", data);
          this.errors.push(error);
          break;
      }
    }
  }

  loadCar(car) {
    try {
      let newCar = new Car(car.license, car.model, car.latlong);
      newCar.miles = car.miles;
      newCar.make = car.make;
      return newCar;
    } catch (error) {
      this.errors.push(new DataError("error loading car", car));
    }
    return null;
  }

  loadDrone(drone) {
    try {
      let newDrone = new Drone(drone.license, drone.model, drone.latlong);
      newDrone.airTimeHours = drone.airTimeHours;
      newDrone.base = drone.base;
      return newDrone;
    } catch (error) {
      this.errors.push(new DataError("error loading drone", drone));
    }
    return null;
  }
}
