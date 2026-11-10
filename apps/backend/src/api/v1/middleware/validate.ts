import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";

// check req body against a schema before it reaches the controller
export const validateRequest = ( schema: ObjectSchema ) => ( req: Request, res: Response, next: NextFunction ) => {
    const { error, value } = schema.validate( req.body, {
        abortEarly: false, // return all errors, not just the first one
        stripUnknown: true, // remove unknown keys from the validated value
    });

    // invalid request body 400 with error messages
    if ( error ) {
        res.status(400).json({ errors: error.details.map( ( detail ) => detail.message ) });
        return;
    }

    //replace the body with the cleaned value
    req.body = value;
    next();
};