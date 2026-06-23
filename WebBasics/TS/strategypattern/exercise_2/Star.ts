import { Shape } from "./Shape";
import { DrawStrategy } from "./DrawStrategy";

export class Star implements Shape {
  name: string;
  drawStrategy: DrawStrategy;

  constructor(name: string, drawStrategy: DrawStrategy) {
    this.name = name;
    this.drawStrategy = drawStrategy;
  }

  render(): void {
    this.drawStrategy.draw();
  }
}

