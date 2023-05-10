import { useState } from "react"
import Button from "./Button"

function Form({ buttonText, onSubmit, showSignUpFields }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handlePhoneNumberChange = event => {
    setPhoneNumber(event.target.value)
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const handleAddressChange = event => {
    setAddress(event.target.value)
  }
  const handlePincodeChange = event => {
    setPincode(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    console.log(event)
    onSubmit(email, password, name, pincode, phoneNumber, address)
  }

  return (
    <form className="form-control" onSubmit={handleSubmitForm}>
      {showSignUpFields && (
        <>
          <div className="form-control">
            <label>
              Employee Name :
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
          </div>
          <div className="form-control">
            <label>
              Employee Phone Number :
              <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </label>
          </div>
          <div className="form-control">
            <label>
              Employee Address :
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
          </div>
          <div className="form-control">
            <label>
              PINCODE :
              <input type="text" value={pincode} onChange={handlePincodeChange} />
            </label>
          </div>
        </>
      )}
      <div className="form-control">
        <label>
          Employee Email : <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div className="form-control">
        <label>
          Password : <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <Button text={buttonText} />
    </form>
  )
}

export default Form
