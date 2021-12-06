
const jwt = require( "jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const getUser = (token) => {
  if (token !== undefined) {
    try {
      // return the user information from the token
      const decoded = jwt.verify(token, `${ACCESS_TOKEN_SECRET}`);
      var userId = decoded.employeeId;
      return { isAuth: true, tokenID: userId };
    } catch (err) {
      // if there's a problem with the token, throw an error
      return { isAuth: false };
    }
  } else {
    return { isAuth: null };
  }
};
export default getUser;
