
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';


function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);

  const handleClickScrol = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">

      <Header />
      <Routes className="routes">

      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cartP" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer />

      {show && (
        <button name="" className="to-top" onClick={handleClickScrol}>
          <i className="fas fa-arrow-alt-circle-up "></i>
        </button>
      )}
    </div>
  );
}

export default App;
