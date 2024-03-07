import { Router } from "express"
import authRoutes from "./auth.routes.js" // sin bigotes porque es un import por default
import bookRoutes from "./book.routes.js"

const router = Router();

router.use("/auth", authRoutes)
router.use('/books', bookRoutes)


export default router; 