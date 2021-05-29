import { Unit } from "./unit";

export class Milliseconds extends Unit {
  toString() {
    return `${this.value}ms`;
  }
}
