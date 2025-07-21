export function isValidType(value, type) 
{   
    
    if(type.constructor.name.toLowerCase() !== "string" || type === "")
        return false;

    if(value === undefined && type === "undefined")
        return true;
    else if(value === undefined && type !== "undefined")
        return false;
    
    const typeOfValue = value.constructor.name.toLowerCase();
    
    return typeOfValue === type.toLowerCase();
}

export function isValidArrayType(values, type)
{
    let i = 0;
    let foundError = false;
    const MAX_LENGTH = values.length;

    while(!foundError && i < MAX_LENGTH)
    {
        foundError = values[i].constructor.name !== type;
        i++;
    }

    return !foundError;
}