const jwt = require("jsonwebtoken");

function auth(req , res ,next) {
    const token = req.cookies.token; 
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    
    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        return next(); // Call next middleware or route handler
    } catch (err) {
         return res.status(401).json({ message: "Unauthorized access" });
    }
}

module.exports = auth;