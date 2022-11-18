import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
function customer(req, res, next) {
  // console.log('hi')
  // console.log(req.user.isCashier);
  if (req.user.isAdmin === true) return res.status(403).send("access denied");
  if (req.user.isAdmin === false) {
    next();
  }
}
export default customer;
