import { Guid } from 'guid-typescript';
import type { Department } from '@shared/types/department';
import type { Employee } from '@shared/types/employee';
import { departmentData } from '../../../data/departments';

// return every department in the departmentData array
export function getAllDepartments(): Department[] {
    return departmentData;
}

// return a department by name, or undefined if not found
export function getDepartmentByName( departmentName: string ): Department | undefined {
    return departmentData.find( (d) => d.name === departmentName );
}

// createEmployee function to add a new employee to a department
export function createDepartment( departmentName: string, firstName: string, lastName: string ): Employee {

    const department = getDepartmentByName( departmentName );

    if ( !department ) {
        throw new Error( `Department with name ${departmentName} not found` );
    }

    const newEmployee: Employee = {
        id: Guid.create().toString(),
        firstName,
        lastName
    };
    
    department.employees.push( newEmployee );
    return newEmployee;
}
