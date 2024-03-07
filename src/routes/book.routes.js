import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBookById } from "../controllers/book.controller.js";

const router = Router();

router.post('/', createBook)
router.get('/', getBooks)
router.put('/:id', updateBookById)
router.delete('/:id', deleteBook)

export default router