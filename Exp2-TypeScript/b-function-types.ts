// Experiment 2(b): Function Parameter and Return Types in TypeScript
// This program demonstrates how to specify types for function parameters and return values.

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log('Add:', add(5, 3));
console.log(greet('Alice'));
console.log('Is 4 even?', isEven(4));
