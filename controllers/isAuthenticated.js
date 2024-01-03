import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.headers;

  console.log("mytoken", token)
  try {
    if (res.cookie) {
      let decode = jwt.verify(token, "zrfabhi");
      console.log(decode)
      let user = await User.findById(decode.user._id);

      req.user = user;
      next();
    }
  } catch (err) {
    res.status(401).json({
      status:'false',
      message: "Invalid token"
    })
  }
};
