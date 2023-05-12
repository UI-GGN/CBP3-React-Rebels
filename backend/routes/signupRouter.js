const express = require("express")
const bcrypt = require("bcrypt")
const { Users } = require("../models")
const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address, pincode } = req.body
    //console.log("request body", req)
    //const hashedPassword = await bcrypt.hash(password, 10)
    const user = await Users.create({
      name,
      email,
      //password: hashedPassword,
      password,
      address,
      pincode,
      phoneNumber
    })
    res.json(user)
  } catch (error) {
    res.status(500).send("An error occurred while signing up.")
  }
})

module.exports = router
