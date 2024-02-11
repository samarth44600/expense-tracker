const jwt = require('jsonwebtoken');
const jsonResponseView = require("../view/jsonResponse.view");

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.split(" ")[1];
        const decodedUser = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        if (!decodedUser) {
            return jsonResponseView({ res, status: 404, message: "Invalid Token", error: "Token is invalid" });
        }

        next();
    } catch {
        return jsonResponseView({ res, status: 404, message: "Unauthorized", error: "Authorization Required" });


    }
}

module.exports = auth