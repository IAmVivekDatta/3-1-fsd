// Experiment 2(a): Simple and Special Types in TypeScript
// This program demonstrates the use of simple types (number, string, boolean) and special types (any, unknown, never, void, null, undefined) in TypeScript.

let id: number = 101;
let name: string = 'Alice';
let isActive: boolean = true;

let anything: any = 'Can be anything';
let notSure: unknown = 10;

function throwError(): never {
  throw new Error('This is a never type function');
}

function logMessage(msg: string): void {
  console.log(msg);
}

let nothing: null = null;
let notDefined: undefined = undefined;

console.log('ID:', id);
console.log('Name:', name);
console.log('Active:', isActive);
console.log('Any:', anything);
console.log('Unknown:', notSure);
logMessage('This is a void function.');
// throwError(); // Uncomment to see never type in action
