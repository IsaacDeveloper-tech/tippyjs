import { isValidArrayType } from "../utils/Validator.mjs";
import { Func } from "./Func.mjs";
import { Var } from "./Var.mjs";

export function TArray(ptype, length, values)
{
    // private
    const array = values;
    let MAX_LENGTH = Var("Number", length);
    let type = Var("String", ptype);
    
    // Validations of array    
    if(array.constructor.name !== "Array")
        throw new TypeError("There's no Array");

    if(array.length !== MAX_LENGTH.value)
        throw new RangeError("Incorrect number of values");

    if(!isValidArrayType(array, type.value))
        throw new TypeError(`Incorrect type value used, please olny use ${type} type`);

    // Public
    return {
        get: Func(["Number"], type.value, (index) => {
            return array[index];
        }),

        length: Func([], "Number", () => {
            return MAX_LENGTH.value;
        }),

        toString: Func([], "String", () => {
            return array.toString();
        }),
    };
}