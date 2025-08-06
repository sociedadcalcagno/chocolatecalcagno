import React from 'react';
import { Trash2, CreditCard } from 'lucide-react';

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-chocolate-dark mb-6">
          Carrito de Compras
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Placeholder cart item */}
            <div className="flex items-center justify-between border-b border-gray-200 py-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="Bombones Surtidos"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-serif text-chocolate-dark">Bombones Surtidos</h3>
                  <p className="text-gray-600">Cantidad: 1</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold text-chocolate-dark mr-4">
                  $15.990
                </span>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-serif text-chocolate-dark mb-4">Resumen</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$15.990</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between pt-4 border-t border-gray-200">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$15.990</span>
              </div>
            </div>
            <button className="w-full bg-chocolate-dark text-white py-3 px-6 rounded-md hover:bg-chocolate-light transition-colors duration-300 flex items-center justify-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;