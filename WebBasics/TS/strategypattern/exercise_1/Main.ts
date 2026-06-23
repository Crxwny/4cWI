import { Circle } from "./Circle";
import { LeftMovement } from "./LeftMovement";
import { Rectangle } from "./Rectangle";
import { RightMovement } from "./RightMovement";

const leftMovement = new LeftMovement();
const rightMovement = new RightMovement();

const circle = new Circle("Circle 1", leftMovement);
const rectangle = new Rectangle("Rectangle 1", rightMovement);

console.log(`${circle.name}:`);
circle.performMove();

console.log(`${rectangle.name}:`);
rectangle.performMove();

circle.strategy = rightMovement;
console.log(`${circle.name} (strategy changed):`);
circle.performMove();
