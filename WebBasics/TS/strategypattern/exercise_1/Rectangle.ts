import { Actor } from "./Actor";
import { MoveStrategy } from "./MoveStrategy";

export class Rectangle implements Actor {
  name: string;
  strategy: MoveStrategy;

  constructor(name: string, strategy: MoveStrategy) {
    this.name = name;
    this.strategy = strategy;
  }

  performMove(): void {
    this.strategy.move();
  }
}

