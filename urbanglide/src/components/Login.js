import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login() {
  const [values, setValues] = useState({
    emailId: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", values);
      console.log(response.data);
      navigate("/form"); 
    } catch (error) {
      console.error("Error logging in:", error.response.data.error);
      setErrors({ loginError: error.response.data.error });
    }
  };
  return (
    <div>
      <div className="urban-signup">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            name="emailId"
            value={values.emailId}
            onChange={handleInput}
            placeholder="Email Address"
            required
          ></input>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInput}
            placeholder="Password"
            required
          ></input>
          <button type="submit">Login</button>
        </form>
        {errors.loginError && (
          <p style={{ color: "red" }}>{errors.loginError}</p>
        )}
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
