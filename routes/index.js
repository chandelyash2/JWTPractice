const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const getUser = require('../middleware/verifyToken')
dotenv.config()
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
router.get('/', (req, res) => {
  const token = jwt.sign(
    { employeeId: user._id },
    `${ACCESS_TOKEN_SECRET}`,
    { expiresIn: "1d" }
  );
  console.log('Hello World ')
  return res.send(token)
})

router.post('/addData', (req, res) => {
  const token = req.headers.authorization

  const verifyToken = getUser(token)

  if (verifyToken) {
    console.log('Token Verfied')
  } else {
    console.log('Wrong Token')
  }
})
export default router