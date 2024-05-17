import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authApi = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        res.json({ msg: "No Token Provided" })
    }

    const userAuth = jwt.verify(token.split(" ")[1], process.env.SECRET_KEY);
    req.userAuth = userAuth;
    next();

};

export default authApi;