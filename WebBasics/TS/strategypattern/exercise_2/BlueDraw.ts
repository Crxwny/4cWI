import { DrawStrategy } from "./DrawStrategy";

export class BlueDraw implements DrawStrategy {
  draw(): void {
    console.log("Drawing in blue color");
  }
}

