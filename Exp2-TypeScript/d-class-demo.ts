// Experiment 2(d): Classes, Constructors, Properties, Methods, and Access Specifiers in TypeScript
// This program demonstrates the use of classes, constructors, properties, methods, and access specifiers.

class Person {
  private id: number;
  public name: string;
  protected age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  public getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
  }
}

const person = new Person(1, 'Alice', 21);
console.log(person.getDetails());
