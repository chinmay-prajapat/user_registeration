import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const LoginPortal = () => {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tryEmail = "ABC";
    const tryPass = "ABC";
    if (email === tryEmail && password === tryPass) {
      history.push("/register");
    }
  };

  return (
    <div className="ui container">
      <h1 className="ui segment" style={{ textAlign: "center" }}>
        Login
      </h1>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="ui primary button" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPortal;
