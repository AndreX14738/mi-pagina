export default function Contactos() {
    return (
      <div className="bg-gradient-to-br from-green-300 to-blue-500 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-4xl font-bold text-yellow-100 mb-8">Contáctanos</h1>
          <p className="text-lg text-yellow-200 mb-12">¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!</p>
  
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <form>
              {/* Nombre */}
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-lg font-semibold text-yellow-600 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
  
              {/* Correo Electrónico */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold text-yellow-600 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
  
              {/* Asunto */}
              <div className="mb-4">
                <label htmlFor="asunto" className="block text-lg font-semibold text-yellow-600 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
  
              {/* Mensaje */}
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-lg font-semibold text-yellow-600 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="6"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
  
              {/* Enviar */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
  
          <div className="mt-12 text-white">
            <h2 className="text-2xl font-semibold mb-4">Otras formas de contactarnos</h2>
            <p className="text-lg mb-2">📞 Teléfono: (123) 456-7890</p>
            <p className="text-lg mb-2">📧 Correo Electrónico: contacto@postresyrecetas.com</p>
            <p className="text-lg mb-2">🏢 Dirección: Calle Ficticia 123, Ciudad, País</p>
          </div>
        </div>
      </div>
    );
  }
  