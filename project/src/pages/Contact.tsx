import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-chocolate-dark mb-6">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estamos aquí para responder tus preguntas y ayudarte con tus pedidos especiales
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-serif text-chocolate-dark mb-6">Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold focus:border-gold"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-chocolate-dark text-white py-3 px-6 rounded-md transition-colors duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-chocolate-light'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">¡Mensaje enviado con éxito!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</p>
            )}
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif text-chocolate-dark mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3" />
                <a href="mailto:chocolatecalcagno@gmail.com" className="text-gray-600 hover:text-gold">
                  chocolatecalcagno@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <a href="tel:+56948561056" className="text-gray-600 hover:text-gold">
                  +56 9 4856 1056
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-3" />
                <span className="text-gray-600">Santiago, Chile</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-serif text-chocolate-dark mb-6">Horario de Atención</h2>
            <div className="space-y-2 text-gray-600">
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábado: 10:00 - 14:00</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;