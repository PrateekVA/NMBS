// pages/_app.js
import React from 'react';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import Slider from '../components/Slider';
import Home from './Home'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
}
