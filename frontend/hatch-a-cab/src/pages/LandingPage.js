import React, { useState } from "react";
import "../styles/pages/LandingPage.scss"

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
                class="form-select"
                value={values.city}
                onChange={handleInputChange}
              >
                <option value="Gurugram">Gurugram</option>
                <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div className="form-group field">
            <label className="label">Sector/Area</label>
            <input
                type="text"
                name="area"
                className="form-control"
                value={values.area}
                onChange={handleInputChange}
                required
            />
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
                    required
                />
                <label className="sub-label">Line 2</label>
                <input
                    type="text"
                    name="line2"
                    className="form-control"
                    value={values.line2}
                    placeholder="Enter Line 2"
                    onChange={handleInputChange}
                    required
                />
                <label className="sub-label">Pincode</label>
                <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    value={values.pincode}
                    placeholder="Enter Pincode"
                    onChange={handleInputChange}
                    required
                />
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
            />
          </div>
          <div className="form-group field">
            <label className="label">Starting From</label>
            <input
                type="date"
                name="fromDate"
                className="form-control"
                value={values.fromDate}
                onChange={handleInputChange}
              />
          </div>
          <button className="btn btn-secondary submit-button" type="submit">Raise Request</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
