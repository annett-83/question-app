const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const data = tokenService.validateAccess(token);
    console.log('decoded', data)
   /*  if (!data) {
      return res.status(401).json({ message: "unauthorized" });
    }  */
    req.user = data;
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorized" });
  }
};
