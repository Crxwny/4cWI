import { DrawStrategy } from "./DrawStrategy";

export class RedDraw implements DrawStrategy {
  draw(): void {
    console.log("Drawing in red color");
  }
}

