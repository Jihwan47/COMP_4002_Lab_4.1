import { useState } from "react";

// this hook manages the state and error messages 
export function useFormInput() {
    // state for the input value and error messages
    const [value, setValue] = useState<string>("");
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

    // callback function to validate the input value
    // validator is the callback variable
    const validate = (validator: (value: string) => string[]) =>{
        const errors = validator(value);
        setErrorMessages(errors);

        // return an object with isValid and errors properties
        return {
            isValid: errors.length === 0,
            errors
        };
    }

    // reset value and messages to initial state
    function reset() {
        setValue("");
        setErrorMessages([]);
    }

    return { value, setValue, errorMessages, validate, reset };
}
