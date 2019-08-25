import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "../services/data-error.js";

export class FleetDataService {
         constructor() {
           this.cars = [];
           this.drones = [];
           this.errors = [];
         }

         getCarByLicense(license) {
           return this.cars.find(car => {
             return car.license === license;
           });
         }

         getCarsSortedByLicense() {
           return this.cars.sort((car1, car2) => {
             if (car1.license < car2.license) {
               return -1;
             }
             if (car1.license > car2.license) {
               return 1;
             }

             return 0;
           });
         }

         filterCarsByMake(filter){
           return this.cars.filter((car) => {
             return car.make.indexOf(filter) >= 0;
           })
         }

         loadData(fleet) {
           for (let data of fleet) {
             switch (data.type) {
               case "car":
                 if (this.validateCorrectCarData(data)) {
                   const car = this.loadCar(data);
                   if (car) {
                     this.cars.push(car);
                   }
                 } else {
                   const error = new DataError("invalid car data", data);
                   this.errors.push(error);
                 }
                 break;
               case "drone":
                 if (this.validateCorrectDroneData(data)) {
                   const drone = this.loadDrone(data);
                   if (drone) {
                     this.drones.push(drone);
                   }
                 } else {
                   const error = new DataError("invalid drone data", data);
                   this.errors.push(error);
                 }
                 break;
               default:
                 const error = new DataError("Invalid vehicle type:", data);
                 this.errors.push(error);
                 break;
             }
           }
         }

         loadCar(car) {
           try {
             let newCar = new Car(car.license, car.model, car.latLong);
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
             let newDrone = new Drone(
               drone.license,
               drone.model,
               drone.latLong
             );
             newDrone.airTimeHours = drone.airTimeHours;
             newDrone.base = drone.base;
             return newDrone;
           } catch (error) {
             this.errors.push(new DataError("error loading drone", drone));
           }
           return null;
         }

         validateCorrectCarData(car) {
           let requiredProperties = "license model latLong miles make".split(
             " "
           );
           let hasErrors = false;
           for (let field of requiredProperties) {
             if (!car[field]) {
               this.errors.push(new DataError(`invalid field ${field}`, car));
               hasErrors = true;
             }
           }
           if (Number.isNaN(Number.parseFloat(car.miles))) {
             this.errors.push(new DataError("invalid mileage", car));
             hasErrors = true;
           }
           return !hasErrors;
         }

         validateCorrectDroneData(drone) {
           let requiredProperties = "license model airTimeHours base latLong".split(
             " "
           );
           let hasErrors = false;
           for (let field of requiredProperties) {
             if (!drone[field]) {
               this.errors.push(new DataError(`invalid field ${field}`, drone));
               hasErrors = true;
             }
           }
           if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
             this.errors.push(new DataError("invalid mileage", drone));
             hasErrors = true;
           }

           return !hasErrors;
         }
       }
