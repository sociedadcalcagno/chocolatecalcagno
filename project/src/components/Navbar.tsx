import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, LocateIcon as ChocolateIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2C1810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <ChocolateIcon className="h-8 w-8 text-[#D4AF37]" />
              <span className="ml-2 text-xl font-serif">Chocolates Calcagno</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/about" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">Quiénes Somos</Link>
              <Link to="/products" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">Productos</Link>
              <Link to="/corporate-gifts" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">Regalos Empresariales</Link>
              <Link to="/contact" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
              <Link to="/cart" className="hover:text-[#D4AF37] px-3 py-2 rounded-md text-sm font-medium">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#D4AF37] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Inicio</Link>
            <Link to="/about" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Quiénes Somos</Link>
            <Link to="/products" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Productos</Link>
            <Link to="/corporate-gifts" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Regalos Empresariales</Link>
            <Link to="/contact" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Contacto</Link>
            <Link to="/cart" className="hover:text-[#D4AF37] block px-3 py-2 rounded-md text-base font-medium">Carrito</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;