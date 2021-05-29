import { SpaceUnit } from "./spaceUnit";

export class Percent extends SpaceUnit {
  toString() {
    return `${this.value}%`;
  }
}
