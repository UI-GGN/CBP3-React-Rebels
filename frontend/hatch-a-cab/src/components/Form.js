import { useState } from "react"
import Button from "./Button"
import "../styles/components/Form.scss"

function Form({ buttonText, onSubmitForm, showSignUpFields, onFieldClick }) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [phoneNumberError, setPhoneNumberError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [pincode, setPincode] = useState("")
  const [pincodeError, setPincodeError] = useState("")
  const [error, setError] = useState(null)

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleNameBlur = () => {
    if (!name) {
      setNameError("Name is required")
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      setNameError("Invalid name format")
    } else {
      setNameError("")
    }
  }
  const handlePhoneNumberChange = event => {
    setPhoneNumber(event.target.value)
  }
  const handlePhoneNumberBlur = () => {
    if (!phoneNumber) {
      setPhoneNumberError("Phone Number is required")
    } else if (!/^(9|8|7|6)\d{9}$/.test(name)) {
      setPhoneNumberError("Invalid phone number format")
    } else {
      setPhoneNumberError("")
    }
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Email is required")
    } else if (!/\S+@\S+\.\S+/.test(name)) {
      setEmail("Invalid email format")
    } else {
      setEmail("")
    }
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Password is required")
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      setPasswordError("Invalid password format")
    } else {
      setPasswordError("")
    }
  }
  const handleAddressChange = event => {
    setAddress(event.target.value)
  }
  const handleAddressBlur = () => {
    if (!address) {
      setAddressError("Addres is required")
    } else if (!/^.{5,}$/.test(name)) {
      setAddressError("Invalid address format")
    } else {
      setAddress("")
    }
  }
  const handlePincodeChange = event => {
    setPincode(event.target.value)
  }
  const handlePincodeBlur = () => {
    if (!pincode) {
      setPincodeError("Pincode is required")
    } else if (!/^\d{6}$/.test(name)) {
      setPincodeError("Invalid pincode format")
    } else {
      setPincodeError("")
    }
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    console.log(event)
    onSubmitForm(email, password, name, pincode, phoneNumber, address)
  }
  const handleFieldClick = () => {
    onFieldClick(error)
  }

  return (
    <form className="form-control" required onSubmit={handleSubmitForm}>
      {showSignUpFields && (
        <>
          <div className="form-control">
            <label>
              Name
              <input type="text" value={name} onClick={handleFieldClick} required onBlur={handleNameBlur} onChange={handleNameChange} />
              {nameError && <div className="error">{nameError}</div>}
            </label>
          </div>
          <div className="form-control">
            <label>
              Phone Number
              <input type="text" value={phoneNumber} onClick={handleFieldClick} required onBlur={handlePhoneNumberBlur} onChange={handlePhoneNumberChange} />
              {phoneNumberError && <div className="error">{phoneNumberError}</div>}
            </label>
          </div>
          <div className="form-control">
            <label>
              Address
              <input type="text" value={address} required onClick={handleFieldClick} onBlur={handleAddressBlur} onChange={handleAddressChange} />
              {addressError && <div className="error">{addressError}</div>}
            </label>
          </div>
          <div className="form-control">
            <label>
              PINCODE
              <input type="text" value={pincode} required onClick={handleFieldClick} onBlur={handlePincodeBlur} onChange={handlePincodeChange} />
              {pincodeError && <div className="error">{pincodeError}</div>}
            </label>
          </div>
        </>
      )}
      <div className="form-control">
        <label>
          Email <input type="email" required value={email} onClick={handleFieldClick} onBlur={handleEmailBlur} onChange={handleEmailChange} />
          {emailError && <div className="error">{emailError}</div>}
        </label>
      </div>
      <div className="form-control">
        <label>
          Password <input type="password" required value={password} onClick={handleFieldClick} onBlur={handlePasswordBlur} onChange={handlePasswordChange} />
          {passwordError && <div className="error">{passwordError}</div>}
        </label>
      </div>
      <Button text={buttonText} />
    </form>
  )
}

export default Form
