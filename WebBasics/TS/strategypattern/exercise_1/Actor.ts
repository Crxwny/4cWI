import { MoveStrategy } from "./MoveStrategy";

export interface Actor {
  name: string;
  strategy: MoveStrategy;
  performMove(): void;
}

