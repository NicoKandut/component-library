import { Unit } from "./unit";

export class Seconds extends Unit {
  toString() {
    return `${this.value}s`;
  }
}
