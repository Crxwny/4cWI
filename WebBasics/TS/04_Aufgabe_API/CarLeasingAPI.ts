import {Car} from "./Car";
import {CarAPI} from "./CarAPI";

export class CarLeasingAPI implements CarAPI {

    getAllCars(): Car[] {
        return this.cars;
    }

    private cars: Car[] = [
        new Car("Toyota", 2005, "Yellow"),
        new Car("Ferrari", 2022, "Black")
    ];


    findCars(searchText: string): Car[] {
        return this.cars.filter(car => car.model === searchText);
    }
}