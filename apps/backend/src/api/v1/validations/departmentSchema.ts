import joi, { ObjectSchema } from "joi";

// define the correct shape of a department object received in JSON
// Require a department name, firstName and lastName string at minimum
export const employeeSchema: ObjectSchema = joi.object({
    departmentName: joi.string().trim().required().messages({
        "any.required": "Department name is required",
        "string.empty": "Department name cannot be empty"
    }),
    firstName: joi.string().trim().min(3).required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty",
        "string.min": "First name must be at least 3 characters long"
    }),
    lastName: joi.string().trim().required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty"
    })
});