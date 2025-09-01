import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
// import { useNavigate, Link } from 'react-router-dom';
import './SignIn.module.css';

const SignIn = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    const trimmedMobile = mobile.trim();
    const trimmedPassword = password.trim();

    if (!trimmedMobile) {
      alert("Enter Mobile Number");
      return;
    }

    if (trimmedMobile.length !== 10 || !/^\d{10}$/.test(trimmedMobile)) {
      alert("Mobile number should be exactly 10 digits");
      return;
    }

    if (!trimmedPassword) {
      alert("Enter Password");
      return;
    }

    let getUsersdata = [];
    try {
      getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
    } catch (error) {
      alert("Error reading user data.");
      return;
    }

    const user = getUsersdata.find(u => u.mobile === trimmedMobile);

    if (!user) {
      alert("User is not registered, please sign up to continue.");
      navigate('/signup');
      return;
    }

    if (user.password !== trimmedPassword) {
      alert("Invalid Password");
      return;
    }

    alert("Sign in Successful");
    login(user);
    navigate('/');
  };

  return (
    <div className="signin-container">
      <div className="container">
        <div className="signin-box">
          <div className="signin-left">
            <p className="signin-title">Login</p>
            <p className="signin-subtitle">Get access to your Orders, Wishlist and Recommendations</p>
            <div className="signin-image">
              <img 
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" 
                alt="Login" 
              />
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
              <p>
                By continuing, you agree to Flipkart's{" "}
                <Link to="/terms" className="terms-link">Terms of Use</Link> and{" "}
                <Link to="/privacy" className="terms-link">Privacy Policy</Link>.
              </p>
            </div>
            <button type="button" className="login-btn" onClick={handleSignIn}>
              LOGIN
            </button>
            <Link to="/signup" className="signup-link">
              <button type="button" className="signup-btn">Not Existing User? Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
