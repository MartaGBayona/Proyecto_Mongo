export const isSuperAdmin = (req, res, next,) => {
    try {
        if(req.tokenData.name !== "super_admin") {
            return res.status(401).json({
                success: false,
                message: "UNATHORIZED"
            })
        }

        next()
    } catch (error){
        res.status(500).json({
            success: false,
            message: "you dont have permisions"
        })
    }
}