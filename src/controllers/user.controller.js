import User from "../models/User.js"


export const getUsers = async (req, res) => {
    try {

        const users = await User.find().select('user');

        res.status(200).json(
            {
                success: true,
                message: "User retrieved successfully",
                data: users
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "User cant retrieved",
                error: error.message
            }
        )
    }
}

export const updateUserkById = async (req, res) => {
    try {
        const { email } = req.body
        const userId = req.params.id

        if (!email) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email required"
                }
            )
        }

        const userUpdated = await User.findOneAndUpdate(
            {
                _id: userId
            },
            {
                email: email
            },
            {
                new: true
            }
        )

        res.status(200).json(
            {
                success: true,
                message: "user updated",
                date: userUpdated
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "user cant retrieved",
                error: error.message
            }
        )
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { email } = req.body
        const userId = req.params.id

        if (!email) {
            return res.status(400).json(
                {
                    success: false,
                    message: "email required"
                }
            )
        }

        const isDeleteUser = await User.deleteOne(
            {
                _id: userId
            },
            {
                email: email
            },
            {
                delete: true
            }
        )
        res.status(200).json(
            {
                success: true,
                message: "user delete successfully",
                data: isDeleteUser
            }
        )

    }catch(error) {
        res.status(500).json(
            {
                success: false,
                message: "user cant deleted",
                error: error.message
            }
        )
    }
}