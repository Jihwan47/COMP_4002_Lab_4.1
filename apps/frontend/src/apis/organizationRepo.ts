import { Guid } from "guid-typescript";
import { roleData } from "../data/roles";
import type { Role } from "../types/role";
import type { Employee } from "../types/employee";


// currently we use a mock database to simulate the existence of the backend
// when we implement the backend we will replace these methods with calls to an API


// Get all roles
export function getRoles(): Role[] {
    // return a copy of the roleData array to display new data after CRUD operations
    return roleData.map((role) => ({...role}));
}

// Get role by title
export function getRoleByTitle(title: string): Role | undefined {
    // convert the title to lowercase and trim whitespace
    const key = title.trim().toLowerCase();
    // find the role in the roleData array that matches the title
    return roleData.find((r) => r.title.trim().toLowerCase() === key);
}

// get employee by id
export function getEmployeeById(employeeId: string): Employee | undefined{
    for (const role of roleData) {
        if (role.employee?.id === employeeId) {
            return role.employee;
        }
    }
    throw new Error(`Employee with id ${employeeId} not found`);
}

// createEmployee function to add a new employee to a department
export function createEmployee(roleTitle: string, firstName: string, LastName: string): Employee {

    const newEmployee: Employee = {
        id: Guid.create().toString(),
        firstName: firstName,
        lastName: LastName
    };

    // get the role by title
    const role = getRoleByTitle(roleTitle);

    // if the role exists, assign the new employee to the role
    // if the role does not exist, create a new role and assign the new employee to it
    if(role) {
        role.employee = newEmployee;
    } else {    
        roleData.push({
            id: Guid.create().toString(),
            title: roleTitle.trim(),
            employee: newEmployee
        })
    }

    return newEmployee;
}

// deleteEmployee function to remove an employee from a department
export function deleteEmployee(employeeId: string): void {

    // find the employee by id and remove it from the roleData array
    for (const role of roleData) {
        if (role.employee?.id === employeeId) {
            role.employee = undefined;
            break;
        }
    }
}

// updateEmployee function to update an employee's information
export function updateEmployee(employeeId: string, firstName: string, lastName: string): Employee {
    const employee = getEmployeeById(employeeId);

    if (!employee) {
        throw new Error(`Employee with id ${employeeId} not found`);
    }

    employee.firstName = firstName;
    employee.lastName = lastName;

    return employee;
}