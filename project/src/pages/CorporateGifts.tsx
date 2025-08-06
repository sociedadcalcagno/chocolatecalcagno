import React from 'react';
import { MessageCircle, Gift, Package, Truck } from 'lucide-react';

const CorporateGifts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-chocolate-dark mb-6">
          Regalos Empresariales
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sorprende a tus clientes y colaboradores con nuestros chocolates artesanales premium
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Regalos corporativos de chocolate"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif text-chocolate-dark mb-6">
            Regalos Únicos y Memorables
          </h2>
          <p className="text-gray-600 mb-6">
            Ofrecemos una amplia gama de opciones personalizadas para regalos corporativos, 
            desde elegantes cajas de bombones hasta colecciones exclusivas diseñadas especialmente 
            para tu empresa.
          </p>
          <a
            href="https://wa.me/56948561056?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20regalos%20empresariales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-chocolate-dark text-white rounded-md hover:bg-chocolate-light transition-colors duration-300"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Solicitar Cotización
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Gift className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Personalización</h3>
          <p className="text-gray-600">
            Personaliza las cajas y chocolates con el logo de tu empresa y mensajes especiales.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Package className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Variedad</h3>
          <p className="text-gray-600">
            Diferentes opciones de presentación y combinaciones de productos para cada ocasión.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <Truck className="h-12 w-12 text-gold mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Entrega</h3>
          <p className="text-gray-600">
            Coordinamos la entrega de los regalos a múltiples direcciones en todo Santiago.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-serif text-chocolate-dark mb-6 text-center">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-serif text-chocolate-dark mb-3">Calidad Premium</h3>
            <p className="text-gray-600">
              Chocolates artesanales elaborados con los mejores ingredientes y técnicas tradicionales.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-chocolate-dark mb-3">Atención Personalizada</h3>
            <p className="text-gray-600">
              Te asesoramos para encontrar el regalo perfecto que se ajuste a tu presupuesto y necesidades.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-chocolate-dark mb-3">Diseños Exclusivos</h3>
            <p className="text-gray-600">
              Creamos presentaciones únicas que reflejan la imagen de tu empresa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-chocolate-dark mb-3">Servicio Integral</h3>
            <p className="text-gray-600">
              Nos encargamos de todo el proceso, desde el diseño hasta la entrega.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateGifts;