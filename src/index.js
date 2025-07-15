import { Var } from "./typed-libs/Var.mjs";
import { Func } from "./typed-libs/Func.mjs";


// Example typed var
let num1 = Var("Number", 1);
let num2 = Var("Number", 2);

// Example typed function
const sum = Func(["Number", "Number"], "Number", (num1, num2) => {
    return num1 + num2;
});


console.log(sum(num1.value, num2.value));
