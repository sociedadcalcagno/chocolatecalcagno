import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import CorporateGifts from './pages/CorporateGifts';
import Admin from './pages/Admin';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FDF8F5]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/corporate-gifts" element={<CorporateGifts />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <ChatBot />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}