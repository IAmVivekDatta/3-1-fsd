// Experiment 2(c): Arrow Functions, Optional, Default, and Rest Parameters in TypeScript
// This program demonstrates the use of arrow functions, optional parameters, default parameters, and rest parameters.

const multiply = (a: number, b: number = 2): number => a * b;

const greet = (name?: string): string => `Hello, ${name || 'Guest'}!`;

const sum = (...numbers: number[]): number => numbers.reduce((acc, val) => acc + val, 0);

console.log('Multiply:', multiply(5));
console.log('Greet:', greet());
console.log('Sum:', sum(1, 2, 3, 4, 5));
