import {CarDealerAPI} from "./CarDealerAPI";
import {CarLeasingAPI} from "./CarLeasingAPI";

console.log("--- Car Dealer API ---");
let api1 = new CarDealerAPI();
console.log(api1.getAllCars());
console.log(api1.findCars("Audi"));

console.log("--- Car Leasing API ---");
let api2 = new CarLeasingAPI();
console.log(api2.getAllCars());
console.log(api2.findCars("Ferrari"));