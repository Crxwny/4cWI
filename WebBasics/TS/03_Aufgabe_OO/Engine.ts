import {Owner} from "./Owner";
export class Engine {
    constructor(private horsepower:number, private producer:string, private fuelType:string, private owner:Owner) {}

    public getHorsepower(): number {
        return this.horsepower;
    }

    public getProducer(): string {
        return this.producer;
    }

    public getFuelType(): string {
        return this.fuelType;
    }

    public getOwner(): Owner {
        return this.owner;
    }

    public getFirstname(): string {
        return this.owner.getFirstname();
    }

    public getLastname(): string {
        return this.owner.getLastname();
    }

}