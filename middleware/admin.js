import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
function Admin(req, res, next) {
  // console.log('hi')
  console.log(req.user.isAdmin);
  if (req.user.isAdmin === false) return res.status(403).send("access denied");
  if (req.user.isAdmin === true) {
    next();
  }
}
export default Admin;
    