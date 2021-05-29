export abstract class Unit extends String {
  constructor(public value: number) {
    super();
  }

  abstract toString(): string;
}
