import React, {useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";




function Signup() {

  const [values, setValues] = useState({
    emailId:'',
    password: '',
    firstName: '',
    lastName:'',
    phoneNo: ''
  })
 const navigate= useNavigate();
const[errors, setErrors] = useState({})
const handleInput= (event) => {
  setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend server's /signup route
      const response =  axios.post("http://localhost:5000/signup", values)
      .then(res => {navigate('/login');})
      .catch(err => console.log(err));
      localStorage.setItem("userData", JSON.stringify(values));
      console.log(response.data);
      // Optionally, you can redirect the user to another page upon successful signup
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <body>
        <div class="urban-signup">

        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
        <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstName}
              onChange={handleInput}
          ></input>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={values.lastName}
              onChange={handleInput}
          ></input>
          <input
            type="email"
            name="emailId"
            onChange={handleInput}
            placeholder="Email Address"
            value={values.emailId}
            
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
              onChange={handleInput}
          ></input>
            <input
            type="number"
            name="phoneNo"
            placeholder="Enter your phone number"
            value={values.phoneNo}
              onChange={handleInput}
          ></input>
         
          <button type="submit">Start your journey</button>
          <button class="urban-skip"><Link to="/form">Skip for now</Link></button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
        </div>
       
      </body>
    </div>
  );
}

export default Signup;
