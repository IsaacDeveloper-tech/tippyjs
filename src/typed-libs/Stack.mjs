import { Func } from "./Func.mjs";
import { Var } from "./Var.mjs";
import { TArray } from "./Array.mjs";
import { isValidType } from "../utils/Validator.mjs";

function StackNode(pvalue, pnode){
    return {
        value: pvalue,
        nextNode: pnode
    }
}

export const Stack = Func(["String"], "Object", (ptype) => {
    const type = Var("String", ptype);
    let windowStack = null;
    let length = Var("Number", 0);

    return {
        push (value)
        {
            if(!isValidType(value, type.value))
                throw new TypeError();

            let temp = StackNode(value, {...windowStack});
            windowStack = {...temp};
            length.value++;
        },
        pop()
        {
            if(windowStack === null)
                return undefined;

            const valueToReturn = windowStack.value;
            let temp = windowStack.nextNode;
            windowStack = {...temp};
            length.value--;
            return valueToReturn;
        },
        peek()
        {
            if(windowStack === null)
                return undefined;

            return windowStack.value;
        },
        isEmpty()
        {
            return this.length() === 0;
        },
        length()
        {
            return length.value;
        },
        clear()
        {
            length.value = 0;
            windowStack = null; 
            return this.isEmpty();
        },
        toArray () 
        {
            let value;
            let values = [];
            
            while(value = this.pop())
                values.push(value);

            return new TArray(type.value, values.length, values);
        }
    };
});