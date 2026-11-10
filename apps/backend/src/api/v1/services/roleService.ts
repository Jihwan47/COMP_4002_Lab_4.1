import * as roleRepository from "../repositories/roleRepository";
import type { Role } from "@shared/types/role";
import type { CreateRoleRequest } from "../models/roleModel";

// get all roles from the repository
export async function getRoles(): Promise<Role[]> {
    return roleRepository.getAllRoles();
}

// check the req value and return a list of error messages
export async function isRoleOccupied( roleTitle: string ): Promise<boolean> {

    // check if the role exists and has an employee assigned to it
    return Boolean( roleRepository.getRoleByTitle( roleTitle )?.employee );
}

// add a person to a role
export async function createEmployee({ roleTitle, firstName, lastName }: CreateRoleRequest): Promise<Role> {
    // call the repository function to create a new employee in the role
    return roleRepository.createEmployee( roleTitle, firstName, lastName );
}