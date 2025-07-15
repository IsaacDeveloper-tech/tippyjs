import { isValidType } from "../utils/Validator.mjs";

export function Func(paramTypes, returnType, fn)
{
    return (...args) => {
        if(args.length !== paramTypes.length || fn.length !== paramTypes.length)
            throw new Error("Incorrect number of parameters");

        for(let i = 0; i < args.length; i++)
        {
            if(!isValidType(args[i], paramTypes[i])) 
                throw new TypeError("");
        }

        const result = fn(...args);

        if(!isValidType(result, returnType)) throw new TypeError("");

        return result;
    }    
}