import type { Request, Response } from 'express';
import * as departmentService from '../services/departmentService';
import { CreateEmployeeRequest } from '../models/departmentModel';

// send all departments to the client
// _req is a placeholder for the request object, which is not used in this function
export async function getDepartments( _req: Request, res: Response ) {
    res.status(200).json(await departmentService.getDepartments());
}

//handle a new employee creation request
export async function createEmployee( req: Request, res: Response) {
    // read the values sent in the req body
    const body: CreateEmployeeRequest = req.body;

    // unknow deptartment
    if ( !( await departmentService.departmentExists( body.departmentName ) ) ) {
        res.status(400).json({ error: ["Employee cannot be added to a non-existent department."] });
        return;
    }

    // if there are no errors, create the new employee and send it back to the client
    res.status(201).json(await departmentService.createEmployee( body ));

}