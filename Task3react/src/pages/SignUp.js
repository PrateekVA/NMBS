import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (mobile.length === 0) {
      alert("Enter mobile number");
      return;
    }
    
    if (mobile.length !== 10) {
      alert("Mobile number should have 10 digits");
      return;
    }

    if (username.trim() === '') {
      alert("Enter your name");
      return;
    }

    if (password.trim() === '') {
      alert("Enter password");
      return;
    }

    let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    
    // Check if user already exists
    const existingUser = getUsersdata.find(user => user.mobile === mobile);
    if (existingUser) {
      alert("User with this mobile number already exists. Please sign in.");
      navigate('/signin');
      return;
    }

    let userData = {
      username: username,
      mobile: mobile,
      password: password
    };

    let users = [...getUsersdata, userData];
    localStorage.setItem("usersdata", JSON.stringify(users));

    alert("Signup Successful");
    navigate('/signin');
  };

  return (
    <div className="signup-container">
      <div className="container">
        <div className="signup-box">
          <div className="signup-left">
            <p className="signup-title">Looks like you're new here!</p>
            <p className="signup-subtitle">Sign up with your mobile number to get started</p>
            <div className="signup-image">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Signup" />
            </div>
          </div>
          <div className="signup-right">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Enter your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="terms">
              <p>By continuing, you agree to Flipkart's 
                <span> Terms of Use</span> and <span>Privacy Policy.</span>
              </p>
            </div>
            <button className="continue-btn" onClick={handleSignUp}>
              CONTINUE
            </button>
            <Link to="/signin" className="signin-link">
              <button className="existing-user-btn">Existing User? Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;