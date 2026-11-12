import prisma from "../../../../prisma/client";

// return every department in the departmentData array
export async function getAllDepartments() {
    
    // get all rows from department table
    const departments = await prisma.department.findMany({ orderBy: { name: "asc" } });
    // get all rows from employee table
    const employees = await prisma.employee.findMany();

    // return a new department array with the employee object included
    return departments.map(( departmaent ) => ({
        // find every column of the department
        ...departmaent,
        // find the employees with the same departmentId, if not found, return empty array
        employees: employees.filter((e) => e.departmentId === departmaent.id)
    }));
}

// return a department by name, or undefined if not found
export async function getDepartmentByName( name: string ) {
    // get the first department with the same name
    return prisma.department.findFirst({ where: { name } });

}

// createEmployee function to add a new employee to a department
export async function createEmployee( departmentName: string, firstName: string, lastName: string ) {

    // look upthe departmentW
    const department = await getDepartmentByName(departmentName);

    // validate whether the department exists, if not throw an error
    if ( !department ) {
        throw new Error (`Department ${departmentName} does not exist`);
    }
    // return the employee row and store the department's id in that row
    return prisma.employee.create({ data: { firstName, lastName, departmentId: department.id } });
}
