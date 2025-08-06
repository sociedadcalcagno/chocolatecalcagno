import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-chocolate-dark mb-6">
          Nuestra Historia
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre la pasión y tradición detrás de cada chocolate artesanal
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Proceso artesanal de chocolate"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif text-chocolate-dark mb-6">
            Tradición y Excelencia
          </h2>
          <p className="text-gray-600 mb-6">
            En Chocolates Calcagno, cada pieza es una obra maestra de sabor y artesanía. 
            Nuestra historia comenzó con una pasión familiar por crear chocolates excepcionales, 
            utilizando solo los ingredientes más finos y técnicas artesanales tradicionales.
          </p>
          <p className="text-gray-600">
            Nos enorgullece mantener viva la tradición chocolatera, innovando constantemente 
            para crear experiencias únicas que deleitan los sentidos de nuestros clientes más exigentes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Calidad Premium</h3>
          <p className="text-gray-600">
            Seleccionamos cuidadosamente cada ingrediente para garantizar la más alta calidad en 
            nuestros productos.
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Artesanía</h3>
          <p className="text-gray-600">
            Cada chocolate es elaborado a mano con atención al detalle y pasión por la excelencia.
          </p>
        </div>
        <div className="text-center p-6">
          <h3 className="text-2xl font-serif text-chocolate-dark mb-4">Innovación</h3>
          <p className="text-gray-600">
            Combinamos técnicas tradicionales con sabores innovadores para crear experiencias únicas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;