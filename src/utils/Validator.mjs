export function isValidType(value, type) 
{   
    if(type.constructor.name.toLowerCase() !== "string" || type === "")
        return false;
    
    const typeOfValue = value.constructor.name.toLowerCase();
    
    return typeOfValue === type.toLowerCase();
}