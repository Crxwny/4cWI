import { MoveStrategy } from "./MoveStrategy";

export class LeftMovement implements MoveStrategy {
  move(): void {
    console.log("Moving left");
  }
}

