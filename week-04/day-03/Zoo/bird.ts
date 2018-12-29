import { Animal } from "./animal";
import { Flyable } from "./flyable";

export class Bird extends Animal implements Flyable {
  constructor(name: string, cute: boolean) {
    super(name, cute);
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return 'laying eggs';
  }

  sound(): string {
    return 'gulugy';
  }

  fly(): void {
    throw new Error("Method not implemented.");
  }

  takeOff(): void {
    throw new Error("Method not implemented.");
  }

  land(): void {
    throw new Error("Method not implemented.");
  }
}