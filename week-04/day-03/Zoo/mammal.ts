import { Animal } from "./animal";

export class Mammal extends Animal {
  constructor(name: string, cute: boolean) {
    super(name, cute);
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    return 'pushing miniature versions out';
  }
  
  sound(): string {
    return 'kiiiiiikiiii';
  }
}