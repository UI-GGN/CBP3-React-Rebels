const express = require("express")
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require("bcrypt")

router.post("/", async (req, res) => {
  const { email, password } = req.body

  const user = await Users.findOne({ where: { email } })
  const dbPPassword = user.password
  //const hashedPassword = await bcrypt.hash(password, 10)

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  //const isCorrectPassword = await user.checkpassword(password)
  const isCorrectPassword = password === dbPPassword

  if (!isCorrectPassword) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  res.json({ message: "Logged in successfully" })
})

module.exports = router
