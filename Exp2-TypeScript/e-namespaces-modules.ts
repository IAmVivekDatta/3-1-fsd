// Experiment 2(e): Namespaces and Modules in TypeScript
// This program demonstrates the use of namespaces and modules.

namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }
  export function multiply(a: number, b: number): number {
    return a * b;
  }
}

console.log('Add:', MathUtils.add(2, 3));
console.log('Multiply:', MathUtils.multiply(4, 5));

// To use modules, you would typically split code into separate files and use 'export' and 'import' keywords.
// Example (not executed here):
// export function subtract(a: number, b: number): number { return a - b; }
// import { subtract } from './mathUtils';
