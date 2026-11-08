import * as organizationRepo from '../apis/organizationRepo';
import type { Role } from '../types/role';


// get roles
export function getRoles(): Role[] {
    return organizationRepo.getRoles();
}

// validate the employee information before creating a new employee
export function validateEmployee(firstName: string, lastName: string, roleTitle: string) {

    const errors = {
        firstName: [] as string[],
        lastName: [] as string[],
        roleTitle: [] as string[]
    };

    // throw new error throws error right away and stops the function from executing any further.
    // use error.push to add error messages to execute all functions first and then return all.
    if (firstName.trim().length < 3) {
        errors.firstName.push("First names must have at least three characters.");
    }

    if (lastName.trim() === "") {
        errors.lastName.push("Last name cannot be empty.");
    }

    if(organizationRepo.getRoleByTitle(roleTitle)?.employee){
        errors.roleTitle.push("Role title is already occupied")
    }

    const isValid = errors.firstName.length === 0 && errors.lastName.length === 0 && errors.roleTitle.length === 0;

    return { isValid, errors };
}
