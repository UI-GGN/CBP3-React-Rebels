var express = require("express")
const { Sequelize } = require("sequelize")
const loginRouter = require("./routes/loginRouter")
const signupRouter = require("./routes/signupRouter")
const cors = require("cors")

var app = express()

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite"
})

app.use(express.json())
app.use(cors())

app.get("/", function (req, res) {
  res.send("Lets Hatch A Cab.")
})

app.use("/login", loginRouter)
app.use("/signup", signupRouter)

app.listen(3001, async () => {
  console.log("Hatch A Cab is listening on port 3001!")

  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
})
