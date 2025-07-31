import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ABOUT</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Flipkart Stories</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Flipkart Wholesale</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>HELP</h4>
            <ul>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Report Infringement</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>POLICY</h4>
            <ul>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">EPR Compliance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>SOCIAL</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <div className="footer-info">
              <div className="mail-us">
                <span><i className="fa-solid fa-envelope"></i> Mail Us</span>
              </div>
              <div className="registered-office">
                <span><i className="fa-solid fa-building"></i> Registered Office Address</span>
              </div>
              <div className="become-seller">
                <span><i className="fa-solid fa-store"></i> Become a Seller</span>
              </div>
              <div className="copyright">
                <p>2007-2024 Flipkart.com</p>
              </div>
              <div className="payment-img">
                <img src="payment-method-c454fb.svg" alt="Payment Methods" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;