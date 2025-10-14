import {Car} from "./Car";
export interface CarAPI {
    getAllCars(): Car[];
    findCars(searchText:string):Car[]
}