import React, { useState, useEffect } from "react";
import "../styles/pages/AddCab.scss";
import { useNavigate, useNavigation } from "react-router-dom"

function AddCab() {
  const initialValues = {
    city: "",
    area: "",
    line1: "",
    line2: "",
    pincode: "",
    pickupTime: "",
    fromDate: "",
  };

  const [values, setValues] = useState(initialValues);
  const [cityError, setCityError] = useState("City is mandatory.");
  const [areaError, setAreaError] = useState("Area is mandatory.");
  const [line1Error, setLine1Error] = useState("Line 1 is mandatory.");
  const [line2Error, setLine2Error] = useState("");
  const [pincodeError, setPincodeError] = useState("Pincode is mandatory.");
  const [pickupTimeError, setPickupTimeError] = useState("");
  const [fromDateError, setFromDateError] = useState("");

  const [cityIsTouched, setCityIsTouched] = useState(false);
  const [areaIsTouched, setAreaIsTouched] = useState(false);
  const [line1IsTouched, setLine1IsTouched] = useState(false)
  const [line2IsTouched, setLine2IsTouched] = useState(false)
  const [pincodeIsTouched, setPincodeIsTouched] = useState(false);
  const [pickupTimeIsTouched, setPickupTimeIsTouched] = useState(false);
  const [fromDateIsTouched, setFromDateIsTouched] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate  = useNavigate();

  useEffect(()=>{
    if(cityError.length>0||areaError.length>0||line1Error.length>0||line2Error.length>0||pincodeError.length>0||pickupTimeError.length>0||fromDateError.length>0) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  },[cityError,areaError,line1Error,line2Error,pincodeError,pickupTimeError,fromDateError])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimedValue = value.trim();
    setValues((prevState) => {
      return { ...prevState, [name]: trimedValue };
    });
  };

  const cityInputBlurHandler = () => {
    setCityIsTouched(true)
    if (!values.city.trim().length > 0) {
      setCityError("City is mandatory.");
      return;
    }
    setCityError("");
  };

  const areaInputBlurHandler = () => {
    setAreaIsTouched(true)
    if (!values.area.trim().length > 0) {
      setAreaError("Area is mandatory.");
      return;
    }
    setAreaError("");
  };

  const line1InputBlurHandler = () => {
    setLine1IsTouched(true)
    if (!values.line1.trim().length > 0) {
      setLine1Error("Line 1 is mandatory.");
      return;
    }
    setLine1Error("");
  };

  const line2InputBlurHandler = () => {
    setLine2IsTouched(true)
  };

  const pincodeInputBlurHandler = () => {
    setPincodeIsTouched(true)
    if (!values.pincode.trim().length > 0) {
      setPincodeError("Pincode is mandatory.");
      return;
    }
    if(isNaN(values.pincode)) {
      setPincodeError("Pincode should contain integer only.");
      return;
    }
    if(values.pincode.length !== 6) {
      setPincodeError("Pincode should contain 6 Digits.");
      return;
    }
    setPincodeError("");
  };

  const pickupTimeInputBlurHandler = () => {
    setPickupTimeIsTouched(true);
    if (values.pickupTime) {
      var today = new Date();
      var time = today.getHours() + 2 + ":" + today.getMinutes();
      if (values.pickupTime < time) {
        setPickupTimeError(
          "Pickup time atleast should be 2 hrs later from now."
        );
        return;
      }
    }
    setPickupTimeError("");
  };

  const fromDateInputBlurHandler = () => {
    setFromDateIsTouched(true);
    if (values.fromDate) {
      var today = new Date();
      var formDate = values.fromDate
        .split("-")
        .reduce((total = 0, num) => parseInt(total) + parseInt(num));
      var date = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
      if (formDate < date) {
        setFromDateError("From date should be in future.");
        return;
      }
    }
    setFromDateError("");
  };

 

  const onSubmit = (e) => {
    navigate('/booking-confirmation');
    e.preventDefault();
  };
  
  const cityHasError = cityError.length > 1 && cityIsTouched
  const areaHasError = areaError.length > 1 && areaIsTouched
  const line1HasError = line1Error.length > 1 && line1IsTouched
  const line2HasError = line2Error.length > 1 && line2IsTouched
  const pincodeHasError = pincodeError.length > 1 && pincodeIsTouched
  const pickupTimeHasError = pickupTimeError.length > 1 && pickupTimeIsTouched
  const fromDateHasError = fromDateError.length > 1 && fromDateIsTouched
  return (
    <div className="wrapper">
      <h3>Add A Cab</h3>
      <div className="align-items-center w-100">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group field">
            <label className="label">City</label>
            <select
              name="city"
              className={`form-control form-select ${cityHasError? 'is-invalid':''}`}
              value={values.city}
              onChange={handleInputChange}
              onBlur={cityInputBlurHandler}
            >
              <option selected>Select City</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Delhi">Delhi</option>
            </select>
            { cityHasError && (
              <div className="text-danger">{cityError}</div>
            )}
          </div>
          <div className="form-group field">
            <label className="label">Sector/Area</label>
            <input
              type="text"
              name="area"
              className={`form-control ${areaHasError? 'is-invalid':''}`}
              value={values.area}
              onChange={handleInputChange}
              onBlur={areaInputBlurHandler}
            />
            {areaHasError && (
              <div className="text-danger">{areaError}</div>
            )}
          </div>
          <div className="form-group field py-2">
            <label>Address</label>
            <div>
              <label className="sub-label">Line 1</label>
              <input
                type="text"
                name="line1"
                className={`form-control ${line1HasError? 'is-invalid':''}`}
                value={values.line1}
                placeholder="Enter Line 1"
                onChange={handleInputChange}
                onBlur={line1InputBlurHandler}
              />
              { line1HasError &&(
                <div className="text-danger">{line1Error}</div>
              )}
              <label className="sub-label">Line 2</label>
              <input
                type="text"
                name="line2"
                className={`form-control ${line2HasError? 'is-invalid':''}`}
                value={values.line2}
                placeholder="Enter Line 2"
                onChange={handleInputChange}
                onBlur={line2InputBlurHandler}
              />
              { line2HasError && (
                <div className="text-danger">{line2Error}</div>
              )}
              <label className="sub-label">Pincode</label>
              <input
                type="text"
                name="pincode"
                className={`form-control ${pincodeHasError? 'is-invalid':''}`}
                value={values.pincode}
                placeholder="Enter Pincode"
                onChange={handleInputChange}
                onBlur={pincodeInputBlurHandler}
              />
              { pincodeHasError && (
                <div className="text-danger">{pincodeError}</div>
              )}
            </div>
          </div>
          <div className="form-group field">
            <label className="label">Pick Up Time</label>
            <input
              type="time"
              name="pickupTime"
              className={`form-control ${pickupTimeHasError? 'is-invalid':''}`}
              value={values.pickupTime}
              onChange={handleInputChange}
              onBlur={pickupTimeInputBlurHandler}
            />
            { pickupTimeHasError?            
              <div className="text-danger">{pickupTimeError}</div> :
              <p>Pickup time atleast should be 2 hrs later from now.</p>
            }
          </div>
          <div className="form-group field">
            <label className="label">Starting From</label>
            <input
              type="date"
              name="fromDate"
              className={`form-control ${fromDateHasError? 'is-invalid':''}`}
              value={values.fromDate}
              onChange={handleInputChange}
              onBlur={fromDateInputBlurHandler}
            />
            { fromDateHasError && (
              <div className="text-danger">{fromDateError}</div>
            )}
          </div>
          <button disabled={isFormValid} className="btn btn-primary submit-button" type="submit">
            Raise Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCab;
