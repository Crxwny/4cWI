import { MoveStrategy } from "./MoveStrategy";

export class RightMovement implements MoveStrategy {
  move(): void {
    console.log("Moving right");
  }
}

