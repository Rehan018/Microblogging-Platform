const jwt = require('jsonwebtoken');
const JW_SECRET = "your-secret-key";
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token,JW_SECRET);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
