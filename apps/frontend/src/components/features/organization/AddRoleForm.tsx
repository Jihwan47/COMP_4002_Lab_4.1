import type { FormEvent } from "react";
import { useFormInput } from "../../../hook/useFormInput";
import * as employeeService from "../../../service/employeeService";
import * as organizationRepo from "../../../apis/organizationRepo";
import styles from "../Features.module.css";

export function AddRoleForm({ onCreated }: { onCreated: () => void }) {

    const roleTitleInput = useFormInput();
    const firstNameInput = useFormInput();
    const lastNameInput = useFormInput();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // prevent the default form submission behavior
        event.preventDefault();

        // validation
        const result = employeeService.validateEmployee(firstNameInput.value, lastNameInput.value, roleTitleInput.value);

        // set the error messages for each input field based on the validation result
        roleTitleInput.validate(() => result.errors.roleTitle);
        firstNameInput.validate(() => result.errors.firstName);
        lastNameInput.validate(() => result.errors.lastName);

        // if the validation fails, do not proceed with creating the employee
        if (!result.isValid) {
            return;
        }

        // create the employee using the organizationRepo
        organizationRepo.createEmployee(roleTitleInput.value, firstNameInput.value, lastNameInput.value);

        // reset the input fields after successful creation
        roleTitleInput.reset();
        firstNameInput.reset();
        lastNameInput.reset();
        
        onCreated();
    }

    return (
        <section className={styles.input}>
            <h2>Add Role</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Role: <input
                            name="roleTitle"
                            type="text"
                            value={roleTitleInput.value}
                            onChange={e => roleTitleInput.setValue(e.target.value)}
                        />
                    </label>
                    {roleTitleInput.errorMessages.map(m => <p key={m} className={styles.error}>{m}</p>)}
                </div>
                <div>
                    <label>
                        First Name: <input
                            name="firstName"
                            type="text"
                            value={firstNameInput.value}
                            onChange={e => firstNameInput.setValue(e.target.value)}
                        />
                    </label>
                    {firstNameInput.errorMessages.map(m => <p key={m} className={styles.error}>{m}</p>)}
                </div>
                <div>
                    <label>
                        Last Name: <input
                            name="lastName"
                            type="text"
                            value={lastNameInput.value}
                            onChange={e => lastNameInput.setValue(e.target.value)}
                        />
                    </label>
                    {lastNameInput.errorMessages.map(m => <p key={m} className={styles.error}>{m}</p>)}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </section>
    );
}   