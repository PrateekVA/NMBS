import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // <-- Add imports here
import './SignUp.module.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const trimmedMobile = mobile.trim();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedMobile) {
      alert("Enter mobile number");
      return;
    }

    if (!/^\d{10}$/.test(trimmedMobile)) {
      alert("Mobile number should have exactly 10 digits");
      return;
    }

    if (!trimmedUsername) {
      alert("Enter your name");
      return;
    }

    if (!trimmedPassword) {
      alert("Enter password");
      return;
    }

    let getUsersdata = [];
    try {
      getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    } catch (error) {
      alert("Error reading user data.");
      return;
    }

    const existingUser = getUsersdata.find(user => user.mobile === trimmedMobile);
    if (existingUser) {
      alert("User with this mobile number already exists. Please sign in.");
      navigate('/signin');
      return;
    }

    const userData = {
      username: trimmedUsername,
      mobile: trimmedMobile,
      password: trimmedPassword
    };

    const users = [...getUsersdata, userData];
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
              <img 
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" 
                alt="Signup" 
              />
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
              <p>
                By continuing, you agree to Flipkart's{' '}
                <Link to="/terms" className="terms-link">Terms of Use</Link> and{' '}
                <Link to="/privacy" className="terms-link">Privacy Policy</Link>.
              </p>
            </div>
            <button type="button" className="continue-btn" onClick={handleSignUp}>
              CONTINUE
            </button>
            <Link to="/signin" className="signin-link">
              <button type="button" className="existing-user-btn">Existing User? Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
