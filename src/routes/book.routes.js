import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBookById } from "../controllers/book.controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)
router.put('/:id', auth, updateBookById)
router.delete('/:id',auth,isSuperAdmin, deleteBook)

export default router