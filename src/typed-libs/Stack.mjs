import { Func } from "./Func.mjs";
import { Var } from "./Var.mjs";
import { TArray } from "./Array.mjs";

function StackNode(pvalue, pnode){
    return {
        value: pvalue,
        nextNode: pnode
    }
}

export const Stack = Func(["String"], "Object", (ptype) => {
    const type = Var("String", ptype);
    const values = [];
    let windowStack = null;
    let length = Var("Number", 0);

    return {
        push: Func([type.value], "undefined", (value) => {
            let temp = StackNode(value, {...windowStack});
            windowStack = {...temp};
            length.value++;
        }),
        pop: Func([], type.value, () => {
            if(windowStack === null)
                throw new RangeError();

            const valueToReturn = windowStack.value;
            let temp = windowStack.nextNode;
            windowStack = {...temp};
            length.value--;
            return valueToReturn;
        }),
        peek: Func([], type.value, () => {
            if(windowStack === null)
                throw new RangeError();

            return windowStack.value;
        }),
        isEmpty: Func([], "Boolean", () => {
            return length.value === 0;
        }),
        length: Func([], "Number", () => {
            return length.value;
        }),
        clear: Func([], "Boolean", () => {
            length.value = 0;
            windowStack = null; 
            return length.value === 0;
        }),
        /*toArray: Func([], "TArray", () => {
            return new TArray(type.value, values.length, values);
        })*/
    };
});