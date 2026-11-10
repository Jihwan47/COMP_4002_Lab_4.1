import { Guid } from "guid-typescript";
import type { Role } from "@shared/types/role";
import { roleData } from "../../../data/roles";

//temp data until the DB is added

// return every role in the roleData array
export function getAllRoles(): Role[] {
    return roleData;
}

//find a role by title or undefined if not found
export function getRoleByTitle( roleTitle: string ): Role | undefined {
    const key = roleTitle.trim().toLowerCase();
    return roleData.find( (r) => r.title.trim().toLowerCase() === key );
}

// put a new employee in a role or create a new role if it doesn't exist
export function createEmployee( roleTitle: string, firstName: string, lastName: string ): Role {
    //build the new employee with a new employee id
    const employee = { id: Guid.create().toString(), firstName, lastName };

    //get the role by title
    const role = getRoleByTitle( roleTitle );

    // role exists, then assign the new employee to the role
    if ( role ) {
        role.employee = employee;
        return role;
    }

    // role does not exist, create a new role and assign the new employee to it
    const newRole: Role = { id: Guid.create().toString(), title: roleTitle.trim(), employee };
    roleData.push( newRole );
    return newRole;
}