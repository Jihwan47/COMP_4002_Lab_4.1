import { useState } from "react";
import * as employeeService from "../../../service/employeeService";
import { AddRoleForm } from "./AddRoleForm";
import styles from "../Features.module.css";

export function Organization() {

    // Get the roles data from the employeeService
    const [roleData, setRolesData] = useState(employeeService.getRoles());
    
    return(<>
        <section>
            <h1>Leadership and Management</h1>
            <table className={styles.table}>
                <tbody>
                {roleData.map(r => {
                    return(
                    <tr key={r.id}>
                        <td className={styles.roleName}>
                            {r.title}
                        </td>
                        <td>
                            {r.employee?.firstName} {r.employee?.lastName}
                        </td>
                    </tr>
                )}
            )}
            </tbody>
            </table>
        </section>
        <AddRoleForm onCreated={() => setRolesData(employeeService.getRoles())} />
    </>);
}