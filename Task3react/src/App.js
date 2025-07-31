import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mobilesandtablets" element={<ProductListing category="Mobiles and Tablets" />} />
                <Route path="/fashion" element={<ProductListing category="Fashion" />} />
                <Route path="/electronics" element={<ProductListing category="Electronics" />} />
                <Route path="/homeandfurniture" element={<ProductListing category="Home and Furnitures" />} />
                <Route path="/tvsandapplicances" element={<ProductListing category="TVs and Applicances" />} />
                <Route path="/flightbooking" element={<ProductListing category="Flight Booking" />} />
                <Route path="/beautyandfood" element={<ProductListing category="Beauty and Food" />} />
                <Route path="/grocery" element={<ProductListing category="Groceries" />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;