import React from 'react';
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div class="urban-signup">
      <h1>Sign Up</h1>
      <input type="email" placeholder='Email Address'></input>
      <input type="password" placeholder='Password'></input>
      <button>Start your journey</button>
      <p>Already have an account? <Link>Sign in</Link></p>
    </div>
  )
}

export default Signup
