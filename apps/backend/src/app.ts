import express from "express";
import cors from "cors";
import morgan from "morgan";
import corsOptions from "./config/cors";
import departmentRoutes from "./api/v1/routes/departmentRoutes";
import roleRoutes from "./api/v1/routes/roleRoutes";
import { errorHandler } from "./api/v1/middleware/errorHandler";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// test route to check the server is running
app.get("/", (_req, res) => {
    res.send("Hello, World!");
});

// register the routes for the API
app. use("/api/v1/roles", roleRoutes);
app.use("/api/v1/departments", departmentRoutes);

app.use(errorHandler);

export default app;