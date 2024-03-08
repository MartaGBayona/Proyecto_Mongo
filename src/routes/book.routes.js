import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBookById } from "../controllers/book.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)
router.put('/:id', auth, updateBookById)
router.delete('/:id',auth, deleteBook)

export default router