import { isValidType } from "../utils/Validator.mjs"

export function Var(type, initialValue)
{
    if(!isValidType(initialValue, type))
        throw new TypeError(`${type} -> ${typeof initialValue}`);

    const state = { value: initialValue }

    return new Proxy(state, {
        get(target, prop)
        {
            if(prop === "value") return target.value;
            return Reflect.get(target, prop);
        },

        set(target, prop, newValue)
        {
            if(prop === "value")
            {
                if (!isValidType(newValue, type))
                    throw new TypeError(`${type} -> ${typeof newValue}`);
                
                target.value = newValue;
                return true;
            }

            return Reflect.set(target, prop, newValue);
        }
    });
}