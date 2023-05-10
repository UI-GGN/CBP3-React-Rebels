import React, { useState } from "react"
import axios from "axios"
import Form from "../components/Form"
import { Link } from "react-router-dom"

const SignUp = props => {
  const [error, setError] = useState(null)

  const handleSignUp = async (email, password, name, phoneNumber, address, pincode) => {
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        email,
        password,
        name,
        phoneNumber,
        address,
        pincode
      })
      console.log("res", response.data)
      // redirect the user to the login page or do some other action here
    } catch (error) {
      console.error(error)
      setError("An error occurred while signing up. Please try again later.")
    }
  }

  return (
    <div className="login-container">
      <h1>Employee Signup</h1>
      <Form buttonText="Signup" onSubmit={handleSignUp} showSignUpFields={true} />

      {error && <p>{error}</p>}

      <p>
        Already a user?
        <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default SignUp
