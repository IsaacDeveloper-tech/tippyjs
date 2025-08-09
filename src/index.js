import { Var } from "./typed-libs/Var.mjs";
import { Func } from "./typed-libs/Func.mjs";
import { TArray } from "./typed-libs/Array.mjs";
import { Stack } from "./typed-libs/Stack.mjs";


// Example typed var
let num1 = Var("Number", 1);
let num2 = Var("Number", 2);

// Example typed function
const sum = Func(["Number", "Number"], "Number", (num1, num2) => {
    return num1 + num2;
});

console.log(sum(num1.value, num2.value));

// Example typed array
const array = TArray("Number", 4, [1,3,4,5]);

console.log(`length of array: ${array.length()} first value of array: ${array.get(0)} data: ${array.toString()}`);

// Example typed stack
const stack = Stack("Number");

stack.push(2);
console.log(stack.peek());
stack.push(7);
stack.push(3);
console.log(stack.length());
console.log(stack.isEmpty());
const arrayFromStack = stack.toArray();
console.log(arrayFromStack.toString());
console.log(stack.length())