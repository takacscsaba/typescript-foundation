'use strict';

export class Animal {
  hunger: number;
  thirst: number;

  constructor (hunger: number = 50, thirst: number = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  public eat() {
    this.hunger--;
  }

  public drink() {
    this.thirst--;
  }

  public play() {
    this.hunger++;
    this.thirst++;
  }
}

let cat = new Animal();
cat.drink();
console.log(cat.thirst);

let dog = new Animal();
dog.eat();
console.log(dog.hunger);

let monkey = new Animal();
monkey.play();
console.log(monkey.thirst);
console.log(monkey.hunger);