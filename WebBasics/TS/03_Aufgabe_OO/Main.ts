import {Engine} from "./Engine";
import {Owner} from "./Owner";

const owner1 = new Owner("Max", "Mustermann", 30);
const engine1 = new Engine(150, "BMW", "Diesel", owner1);

console.log(`Engine Details:
Horsepower: ${engine1.getHorsepower()}
Producer: ${engine1.getProducer()}
Fuel Type: ${engine1.getFuelType()}
Owner: ${engine1.getFirstname()} ${engine1.getLastname()}, Age: ${engine1.getOwner().getAge()}`);