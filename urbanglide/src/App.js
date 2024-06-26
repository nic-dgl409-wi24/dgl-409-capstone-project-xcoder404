import React from "react";
import "./App.css";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./components/Form";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Kick from "./components/Kick";
import Offroad from "./components/Offroad";
import Profile from "./pages/Profile";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {


  return (
    <Router>
      <div className="navigation">
        <body>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
            </li>
            
          </ul>
        </nav>
        </body>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kick" element={<Kick />} />
        <Route path="/offroad" element={<Offroad />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div className="footer">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>1835 Piercy Avenue, Courtenay, BC</p>
          <p>Phone: +1 250 589 6903</p>
          <p>Email: meetp4242@gmail.com</p>
        </div>
        <div className="sitemap">
        <div class="footer-navigation">
        <nav>
          <h3>Site map</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
     
        </div>
        <div className="social">
          <h3>Social media</h3>
          <div className="social-icons">
            <FaFacebook  className="icon" /> 
            <FaInstagram className="icon" />
            <FaLinkedin  className="icon"/>
            <FaTwitter  className="icon"/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
