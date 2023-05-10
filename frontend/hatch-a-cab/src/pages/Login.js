import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/pages/Login.scss"
import Form from "../components/Form"

const Login = props => {
  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/login", { params: { email, password } })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login-container">
      <h1>Employee Login</h1>
      <Form onSubmit={handleLogin} buttonText="Login" showSignUpFields={false} />

      <p>
        New User?
        <Link to="/signup"> Signup </Link>
      </p>
    </div>
  )
}

export default Login
