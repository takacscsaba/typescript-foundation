import { Animal } from "./animal";

export class Reptile extends Animal {
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
    return 'kvavakvkavka';
  }
}