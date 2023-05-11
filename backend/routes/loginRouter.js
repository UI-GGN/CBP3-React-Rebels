const express = require("express")
const router = express.Router()
const { Users } = require("../models")

router.post("/", async (req, res) => {
  const { email, password } = req.body

  const user = await Users.findOne(email)

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  const isCorrectPassword = await user.checkPassword(password)

  if (!isCorrectPassword) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  res.json({ message: "Logged in successfully" })
})

module.exports = router
