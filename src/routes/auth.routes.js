import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

// es una funcion que devuelve un objeto de tipo router
const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;