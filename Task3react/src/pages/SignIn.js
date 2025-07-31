import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignIn.css';

const SignIn = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!mobile || mobile.trim() === "") {
      alert("Enter Mobile Number");
      return;
    }

    if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
      alert("Mobile number should be exactly 10 digits");
      return;
    }

    if (!password || password.trim() === "") {
      alert("Enter Password");
      return;
    }

    const getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    let count = 0;

    for (let i = 0; i < getUsersdata.length; i++) {
      if (mobile === getUsersdata[i].mobile) {
        if (password === getUsersdata[i].password) {
          alert("Sign in Successful");
          
          login(getUsersdata[i]);
          
          navigate('/');
          return;
        } else {
          alert("Invalid Password");
          return;
        }
      } else {
        count++;
      }
    }

    if (count === getUsersdata.length) {
      alert("User is not registered, please sign up to continue.");
      navigate('/signup');
    }
  };

  return (
    <div className="signin-container">
      <div className="container">
        <div className="signin-box">
          <div className="signin-left">
            <p className="signin-title">Login</p>
            <p className="signin-subtitle">Get access to your Orders, Wishlist and Recommendations</p>
            <div className="signin-image">
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Login" />
            </div>
          </div>
          <div className="signin-right">
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
            <button className="login-btn" onClick={handleSignIn}>
              LOGIN
            </button>
            <Link to="/signup" className="signup-link">
              <button className="signup-btn">Not Existing User? Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;


