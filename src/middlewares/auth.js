import Jwt from "jsonwebtoken";


export const auth =async(req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        };

        const decoded = Jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        //const decoded =jwt.decode(token)
        console.log(decoded) //muestra por terminal la id del usuario, su role y la info del token

        // const decoded = jwt.decode(token) nos ahorra el jwt.verify

        req.tokenData = decoded
    next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "token invalid",
        })
    }
}