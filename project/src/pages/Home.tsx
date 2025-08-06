import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Pasión por el chocolate artesanal
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Descubre el arte de la chocolatería fina
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2C1810] hover:bg-[#3D241B] transition-colors duration-300"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Ver Productos
            </Link>
            <a
              href="https://wa.me/56948561056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Habla con nosotros por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#2C1810] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Suscríbete a nuestro newsletter</h2>
          <p className="mb-6">Recibe nuestras novedades y ofertas especiales</p>
          <div className="max-w-md mx-auto">
            {/* Placeholder for Sendinblue form - to be replaced with actual form */}
            <div id="sib-form-container" className="sib-form-container">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="flex-grow px-4 py-2 rounded-md text-black"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#D4AF37] text-[#2C1810] rounded-md hover:bg-[#B89530] transition-colors duration-300"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;