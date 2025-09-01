import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
   <AuthProvider>
     <CartProvider>
       <Header />
       <main>
         <Component {...pageProps} />
       </main>
       <Footer />
     </CartProvider>
   </AuthProvider>
 );
}
