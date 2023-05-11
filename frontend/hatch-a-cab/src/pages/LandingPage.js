import React, { useState } from "react";
import "../styles/pages/LandingPage.scss";

function LandingPage() {
  const initialValues = {
    city: "Gurugram",
    area: "",
    line1: "",
    line2: "",
    pincode: "",
    pickupTime: "",
    fromDate: "",
  };

  const [values, setValues] = useState(initialValues);
  const [cityError, setCityError] = useState("");
  const [areaError, setAreaError] = useState("");
  const [line1Error, setLine1Error] = useState("");
  const [line2Error, setLine2Error] = useState("");
  const [pincodeError, setPincodeError] = useState("");
  const [pickupTimeError, setPickupTimeError] = useState("");
  const [fromDateError, setFromDateError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const trimedValue = value.trim();
    setValues((prevState) => {
      return { ...prevState, [name]: trimedValue };
    });
  };

  const cityInputBlurHandler = () => {
    if (!values.city.trim().length > 0) {
      setCityError("City is mandatory.");
      return;
    }
    setCityError("");
  };

  const areaInputBlurHandler = () => {
    if (!values.area.trim().length > 0) {
      setAreaError("Area is mandatory.");
      return;
    }
    setAreaError("");
  };

  const line1InputBlurHandler = () => {
    if (!values.line1.trim().length > 0) {
      setLine1Error("Line 1 is mandatory.");
      return;
    }
    setLine1Error("");
  };

  const line2InputBlurHandler = () => {};

  const pincodeInputBlurHandler = () => {
    if (!values.pincode.trim().length > 0) {
      setPincodeError("Pincode is mandatory.");
      return;
    }
    setPincodeError("");
  };

  const pickupTimeInputBlurHandler = () => {
    if (values.pickupTime) {
      var today = new Date();
      var time = today.getHours() + 2 + ":" + today.getMinutes();
      console.log(values.pickupTime)
      console.log(time)
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

  const autoValidateForm = () => {
    cityInputBlurHandler();
    areaInputBlurHandler();
    line1InputBlurHandler();
    line2InputBlurHandler();
    pincodeInputBlurHandler();
    pickupTimeInputBlurHandler();
    fromDateInputBlurHandler();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    autoValidateForm();
  };

  return (
    <div className="wrapper">
      <h3>Add A Cab</h3>
      <div className="align-items-center w-100">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group field">
            <label className="label">City</label>
            <select
              name="city"
              className="form-select"
              value={values.city}
              onChange={handleInputChange}
              onBlur={cityInputBlurHandler}
            >
              <option value="Gurugram">Gurugram</option>
              <option value="Delhi">Delhi</option>
            </select>
            {cityError.length > 1 && (
              <div className="text-danger">{cityError}</div>
            )}
          </div>
          <div className="form-group field">
            <label className="label">Sector/Area</label>
            <input
              type="text"
              name="area"
              className="form-control"
              value={values.area}
              onChange={handleInputChange}
              onBlur={areaInputBlurHandler}
            />
            {areaError.length > 1 && (
              <div className="text-danger">{areaError}</div>
            )}
          </div>
          <div className="form-group field">
            <label>Address</label>
            <div>
              <label className="sub-label">Line 1</label>
              <input
                type="text"
                name="line1"
                className="form-control"
                value={values.line1}
                placeholder="Enter Line 1"
                onChange={handleInputChange}
                onBlur={line1InputBlurHandler}
              />
              {line1Error.length > 1 && (
                <div className="text-danger">{line1Error}</div>
              )}
              <label className="sub-label">Line 2</label>
              <input
                type="text"
                name="line2"
                className="form-control"
                value={values.line2}
                placeholder="Enter Line 2"
                onChange={handleInputChange}
                onBlur={line2InputBlurHandler}
              />
              {line2Error.length > 1 && (
                <div className="text-danger">{line2Error}</div>
              )}
              <label className="sub-label">Pincode</label>
              <input
                type="text"
                name="pincode"
                className="form-control"
                value={values.pincode}
                placeholder="Enter Pincode"
                onChange={handleInputChange}
                onBlur={pincodeInputBlurHandler}
              />
              {pincodeError.length > 1 && (
                <div className="text-danger">{pincodeError}</div>
              )}
            </div>
          </div>
          <div className="form-group field">
            <label className="label">Pick Up Time</label>
            <input
              type="time"
              name="pickupTime"
              className="form-control"
              value={values.pickupTime}
              onChange={handleInputChange}
              onBlur={pickupTimeInputBlurHandler}
            />
            {pickupTimeError.length > 1 && (
              <div className="text-danger">{pickupTimeError}</div>
            )}
          </div>
          <div className="form-group field">
            <label className="label">Starting From</label>
            <input
              type="date"
              name="fromDate"
              className="form-control"
              value={values.fromDate}
              onChange={handleInputChange}
              onBlur={fromDateInputBlurHandler}
            />
            {fromDateError.length > 1 && (
              <div className="text-danger">{fromDateError}</div>
            )}
          </div>
          <button className="btn btn-secondary submit-button" type="submit">
            Raise Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
