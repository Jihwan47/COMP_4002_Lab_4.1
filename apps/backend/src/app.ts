import express from "express";
import cors from "cors";
import morgan from "morgan";
import corsOptions from "./config/cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

// test route to check the server is running
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;