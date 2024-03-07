import { Router } from "express"
import authRoutes from "./auth.routes.js" // sin bigotes porque es un import por default

const router = Router();

router.use("/auth", authRoutes)

export default router; 