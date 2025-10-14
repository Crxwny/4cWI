import {Car} from "./Car";
import {CarAPI} from "./CarAPI";

export class CarDealerAPI implements CarDealerAPI {

    getAllCars(): Car[] {
        return this.cars;
    }

    private cars: Car[] = [
        new Car("Mercedes", 2020, "Blue"),
        new Car("Audi", 2019, "Red")
        ];


    findCars(searchText: string): Car[] {
        return this.cars.filter(car => car.model === searchText);
    }
}