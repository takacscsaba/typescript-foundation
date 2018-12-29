export abstract class Animal {
  name: string;
  age: number;
  cute: boolean; 
  
  constructor(name: string, cute: boolean) {
    this.name = name;
    this.cute = cute;
  }

  abstract getName(): string;

  abstract breed(): string;

  abstract sound(): string;
}