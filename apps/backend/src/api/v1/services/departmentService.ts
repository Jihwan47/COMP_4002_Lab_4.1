import * as departmentRepository from "../repositories/departmentRepository";
import type { Department } from "@shared/types/department";
import type { Employee } from "@shared/types/employee";
import type { CreateEmployeeRequest } from "../models/departmentModel";


// get all departments from the repository
export async function getDepartments(): Promise<Department[]> {
    return departmentRepository.getAllDepartments();
}

// check the request values and return error messages if there is any
export async function departmentExists( departmentName: string ): Promise<boolean> {
    return Boolean( departmentRepository.getDepartmentByName( departmentName ) );
}

// add a person to a department
export async function createEmployee( {departmentName, firstName, lastName }: CreateEmployeeRequest ): Promise<Employee> {
    return departmentRepository.createDepartment( departmentName, firstName, lastName );
} 