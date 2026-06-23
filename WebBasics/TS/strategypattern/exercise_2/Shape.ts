import { DrawStrategy } from "./DrawStrategy";

export interface Shape {
  name: string;
  drawStrategy: DrawStrategy;
  render(): void;
}

