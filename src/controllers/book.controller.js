import Book from "../models/Book.js";

export const createBook = async(req, res) => {
    try {
        const { title, description, author } = req.body

        if(!title || !description || !author) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title description and author required"
                }
            )
        }
        const newBook = await Book.create(
            {
                title,
                description,
                author
            }
        )

        res.status(201).json(
            {
                success: true,
                message: "Book created successfully",
                data: newBook
            }
        )
    }catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant created",
                error: error.message
            }
        )
    }
}