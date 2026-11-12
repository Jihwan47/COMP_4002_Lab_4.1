import * as roleRepository from "../repositories/roleRepository";
import type { CreateRoleRequest } from "../models/roleModel";

// get all roles from the repository
export async function getRoles() {
    // ask the repository for all roles and return them
    return roleRepository.getAllRoles();
}

// check the req value and return a list of error messages
export async function isRoleOccupied( roleTitle: string ): Promise<boolean> {

    // wait for the database to find the role ( null if not found )
    const role = await roleRepository.getRoleByTitle( roleTitle );

    // true only if the role exists and has an employee
    return Boolean( role?.employee );
}

// add a person to a role
export async function createEmployee({ roleTitle, firstName, lastName }: CreateRoleRequest){
    // call the repository function to create a new employee in the role
    return roleRepository.createEmployee( roleTitle, firstName, lastName );
}