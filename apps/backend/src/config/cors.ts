import type { CorsOptions } from "cors";

// URL is http://localhost:5173 for frontend, it will get the value from the .env file
const allowedOrigins = [process.env.FRONTEND_URL];

export const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};