import { SpaceUnit } from "./spaceUnit";

export class Pixel extends SpaceUnit {
  toString() {
    return `${this.value}px`;
  }
}
