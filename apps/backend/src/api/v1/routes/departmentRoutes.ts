import { Router } from "express";
import * as departmentController from "../controllers/departmentController";
import { employeeSchema } from "../validations/departmentSchema";
import { validateRequest } from "../middleware/validate";

const router = Router();

// GET /api/v1/departments
router.get("/", departmentController.getDepartments);

// POST /api/v1/departments/employees
router.post("/employees", validateRequest(employeeSchema), departmentController.createEmployee);

export default router;