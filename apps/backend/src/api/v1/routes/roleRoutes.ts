import { Router } from "express";
import { roleSchema } from "../validations/roleSchema";
import * as roleController from "../controllers/roleController";
import { validateRequest } from "../middleware/validate";

const router = Router();

// GET /api/v1/roles
router.get("/", roleController.getRoles);

// POST /api/v1/roles
router.post("/", validateRequest(roleSchema), roleController.createRoleEntry);

export default router;