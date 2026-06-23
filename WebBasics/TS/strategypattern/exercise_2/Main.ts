import { Triangle } from "./Triangle";
import { Star } from "./Star";
import { RedDraw } from "./RedDraw";
import { BlueDraw } from "./BlueDraw";

// Exercise 2: Verschiedene Shapes mit unterschiedlichen Draw-Strategien
console.log("=== Exercise 2 ===");

const shape1 = new Triangle("Dreieck1", new RedDraw());
const shape2 = new Triangle("Dreieck2", new BlueDraw());
const shape3 = new Star("Stern1", new RedDraw());
const shape4 = new Star("Stern2", new BlueDraw());

console.log(`${shape1.name}:`);
shape1.render();

console.log(`${shape2.name}:`);
shape2.render();

console.log(`${shape3.name}:`);
shape3.render();

console.log(`${shape4.name}:`);
shape4.render();
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { RightMovement } from "./RightMovement";
import { LeftMovement } from "./LeftMovement";

// Exercise 1: Verschiedene Akteure mit unterschiedlichen Bewegungsstrategien
console.log("=== Exercise 1 ===");

const actor1 = new Circle("Kreis1", new RightMovement());
const actor2 = new Circle("Kreis2", new LeftMovement());
const actor3 = new Rectangle("Rechteck1", new RightMovement());
const actor4 = new Rectangle("Rechteck2", new LeftMovement());

console.log(`${actor1.name}:`);
actor1.performMove();

console.log(`${actor2.name}:`);
actor2.performMove();

console.log(`${actor3.name}:`);
actor3.performMove();

console.log(`${actor4.name}:`);
actor4.performMove();

