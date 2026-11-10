import type { Request, Response, NextFunction } from "express";

// last middleware: catches unexpected errors and sends a 500 response
export function errorHandler( err: Error, _req: Request, res: Response, _next: NextFunction ): void {
    console.error( err );
    res.status(500).json({ error: "Something went wrong" });
}
