import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">Chocolates Calcagno</h3>
            <p className="text-sm">Pasión por el chocolate artesanal desde 2025</p>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#D4AF37]">Inicio</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37]">Quiénes Somos</Link></li>
              <li><Link to="/products" className="hover:text-[#D4AF37]">Productos</Link></li>
              <li><Link to="/corporate-gifts" className="hover:text-[#D4AF37]">Regalos Empresariales</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:chocolatecalcagno@gmail.com" className="hover:text-[#D4AF37]">
                  chocolatecalcagno@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D4AF37]" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#D4AF37]" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Chocolates Calcagno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;