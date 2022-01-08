import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userData from "./apis/userData";
import { v4 as uuid } from "uuid";

const UserRegister = () => {
  const initalValues = { username: "", city: "", profession: "" };
  const [formValue, setFormValue] = useState(initalValues);
  const [formError, setFormErrors] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setSubmit(true);
    addUserData(formValue);
  };

  const addUserData = async (data) => {
    console.log(data);
    const request = {
      id: uuid(),
      ...data,
    };
    const response = await userData.post("/userData", request);
    console.log(response);
    setUserDetails([...userDetails, response.data]);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.profession) {
      errors.profession = "Profession is required!";
    }
    return errors;
  };
  return (
    <div>
      <form className="ui container" onSubmit={handleSubmit}>
        <h1 className="ui segment" style={{ textAlign: "center" }}>
          Register
        </h1>
        {Object.keys(formError).length === 0 && isSubmit ? (
          <div className="ui message">Added</div>
        ) : null}
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formValue.username}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formError.username}</p>
          <div className="field">
            <label>city</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValue.city}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formError.city}</p>

          <div className="field">
            <label>profession</label>
            <input
              type="text"
              name="profession"
              placeholder="profession"
              value={formValue.profession}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formError.profession}</p>
        </div>
        <button
          className="ui primary button"
          onSubmit={handleSubmit}
          style={{ margin: "10px 0 10px 0" }}
        >
          Submit
        </button>
        <div className="field">
          <p className="ui positive basic button">
            <Link to="/display" className="item">
              View Data
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default UserRegister;
