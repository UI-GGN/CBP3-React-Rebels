import React, { useState } from "react";
import Button from "../components/Button";
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
          <div className="form-control">
            <label>
              City :
              <select
                name="city"
                value={values.city}
                onChange={handleInputChange}
              >
                <option value="Gurugram">Gurugram</option>
                <option value="Delhi">Delhi</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label>
              Sector/Area :
              <input
                type="text"
                name="area"
                value={values.area}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Address :
              <div className="form-control">
                <label>
                  Line 1 :
                  <input
                    type="text"
                    name="line1"
                    value={values.line1}
                    placeholder="line 1"
                    onChange={handleInputChange}
                    required
                 />
                </label>
              </div>
              <div className="form-control">
                <label>
                  Line 2 :
                  <input
                    type="text"
                    name="line2"
                    value={values.line2}
                    placeholder="line 2"
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
              <div className="form-control">
                <label>
                  Pin code :
                  <input
                    type="text"
                    name="pincode"
                    value={values.pincode}
                    placeholder="pincode"
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </label>
          </div>
          <div className="form-control">
            <label>Pick Up Time</label>
            <input
                type="time"
                name="pickupTime"
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
          <Button className="submit-button" text={"Raise Request"} />
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
