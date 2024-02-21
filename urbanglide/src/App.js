import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import About from "./pages/About";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
  return (
    <Router>
      <div class="navigation">
        <nav>
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
            
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <div class="footer">
        
          <div class="contact">
          <h3>Contact Us</h3>
            <p>1835 Piercy Avenue, Courtenay, BC</p>
            <p>Phone: +1 250 589 6903</p>
            <p>Email: meetp4242@gmail.com</p>
          </div>
          <div class="sitemap">
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
            
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
          </div>

          <div class="social">
            <h3>Social media</h3>
          <FaFacebook  className="icon" /> 
          <FaInstagram className="icon" />
          <FaLinkedin  className="icon"/>
           <FaTwitter  className="icon"/>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
