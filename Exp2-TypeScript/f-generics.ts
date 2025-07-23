// Experiment 2(f): Generics with Variables, Functions, and Constraints in TypeScript
// This program demonstrates the use of generics in variables, functions, and with constraints.

// Generic variable
let genericArray: Array<number> = [1, 2, 3, 4];
console.log('Generic Array:', genericArray);

// Generic function
function identity<T>(arg: T): T {
  return arg;
}
console.log('Identity:', identity<string>('Hello'));

// Generic function with constraint
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
console.log('Length:', getLength('TypeScript'));
console.log('Length:', getLength([1, 2, 3, 4]));
// console.log('Length:', getLength(123)); // Error: number does not have length property
