// shape of the body sent to API when creating a new employee
export interface CreateEmployeeRequest {
    departmentName: string;
    firstName: string;
    lastName: string;
}