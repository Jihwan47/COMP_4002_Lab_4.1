import prisma from "../../../../prisma/client";

//temp data until the DB is added

// return every role in the roleData array
export async function getAllRoles() {

    // get all rows from the role table
    const roles = await prisma.role.findMany();
    // get all rows from the employee table
    const employees = await prisma.employee.findMany();

    // return a new role array with the employee object included in each role object
    return roles.map((role) => ({
        // find every column of the roles
        ...role,
        // find the employee with the same id, if not found, return null
        employee: employees.find((e) => e.id === role.employeeId) ?? null
    }));

}


//find a role by title or undefined if not found
export async function getRoleByTitle( title: string ) {
    const role = await prisma.role.findFirst({
        where: { title: {equals: title.trim(), mode: "insensitive"} },
    });

    if ( !role ) {
        return undefined;
    }

    const employee = role.employeeId ? await prisma.employee.findUnique({ where: { id: role.employeeId}})
    : null;
    
    return { ...role, employee };
}

// put a new employee in a role or create a new role if it doesn't exist
export async function createEmployee( roleTitle: string, firstName: string, lastName: string ) {
    
    // create the employee first so we get their new id
    const employee = await prisma.employee.create({ 
        data: { firstName, lastName }
    });

    // check if a role with this title already exists
    const role = await getRoleByTitle(roleTitle);

    // role exists, save the new employee's id
    if ( role ) {
        return prisma.role.update({
            // role row to update
            where: { id: role.id },
            // columns to update
            data: { employeeId: employee.id }
        });
    }

    // role does not exist, create a new role with the employee's id
    return prisma.role.create({
        data: { title: roleTitle.trim(), employeeId: employee.id }
    });
}