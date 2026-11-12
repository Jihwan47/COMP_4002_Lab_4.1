import * as departmentRepository from "../repositories/departmentRepository";
import type { CreateEmployeeRequest } from "../models/departmentModel";


// get all departments from the repository
export async function getDepartments() {
    return departmentRepository.getAllDepartments();
}

// check the request values and return error messages if there is any
export async function departmentExists( departmentName: string ): Promise<boolean> {
    // wait for the database to find the department ( null if not found )
    const department = await departmentRepository.getDepartmentByName( departmentName );
    // true only if the department exists
    return Boolean( department );
}

// add a person to a department
export async function createEmployee( {departmentName, firstName, lastName }: CreateEmployeeRequest ) {
    // take the three values from the req and pass them to the repository
    return departmentRepository.createEmployee( departmentName, firstName, lastName );
} 