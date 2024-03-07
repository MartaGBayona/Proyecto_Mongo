import Book from "../models/Book.js";

export const createBook = async (req, res) => {
    try {
        const { title, description, author } = req.body

        if (!title || !description || !author) {
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
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant created",
                error: error.message
            }
        )
    }
}

export const getBooks = async (req, res) => {
    try {

        const books = await Book.find().select('title');

        res.status(200).json(
            {
                success: true,
                message: "Book retrieved successfully",
                data: books
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Book cant retrieved",
                error: error.message
            }
        )
    }
}

export const updateBookById = async (req, res) => {
    try {
        const { title } = req.body
        const bookId = req.params.id

        if (!title) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title required"
                }
            )
        }

        const bookUpdated = await Book.findOneAndUpdate(
            {
                _id: bookId
            },
            {
                title: title
            },
            {
                new: true
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "book updated",
                date: bookUpdated
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "book can retrieved",
                error: error.message
            }
        )
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { title } = req.body
        const bookId = req.params.id

        if (!title) {
            return res.status(400).json(
                {
                    success: false,
                    message: "title required"
                }
            )
        }

        const isDeleteBook = await Book.deleteOne(
            {
                _id: bookId
            },
            {
                title: title
            },
            {
                delete: true
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "book delete successfully",
                data: isDeleteBook
            }
        )

    }catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "boon cant deleted",
                error: error.message
            }
        )
    }
}