import Joi, { ObjectSchema } from "joi";

// define the correct shape of a role object received in JSON
// Require a roleTitle, firstName, and lastName string at minimum
export const roleSchema: ObjectSchema = Joi.object({
    roleTitle: Joi.string().trim().required().messages({
        "any.required": "Role is required",
        "string.empty": "Role cannot be empty"
    }),
    firstName: Joi.string().trim().min(3).required().messages({
        "any.required": "First name is required",
        "string.empty": "First name cannot be empty",
        "string.min": "First name must be at least 3 characters long"
    }),
    lastName: Joi.string().trim().required().messages({
        "any.required": "Last name is required",
        "string.empty": "Last name cannot be empty"
    })
});