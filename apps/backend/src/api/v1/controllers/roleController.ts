import type { Request, Response } from 'express';
import * as roleService from '../services/roleService';
import type { CreateRoleRequest } from '../models/roleModel';

// send all roles to the front-end
export async function getRoles( _req: Request, res: Response ) {
    res.status(200).json(await roleService.getRoles());
}

// handle a new role entry from the front-end
export async function createRoleEntry( req: Request, res: Response ) {
    // read the values sent in the req body
    const body: CreateRoleRequest = req.body;

    // role already has a person
    if ( await roleService.isRoleOccupied( body.roleTitle ) ) {
        res.status(400).json({ error: ["Role title is already occupied."] });
        return;
    }

    // if there are no errors, create the new role entry and send it back to the client
    res.status(201).json(await roleService.createEmployee( body ));
}