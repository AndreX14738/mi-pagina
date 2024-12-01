export default function Footer() {
    return (
      <footer className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Sección de Redes Sociales */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Sección de Enlaces rápidos */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="hover:text-yellow-200">Inicio</a>
                </li>
                <li>
                  <a href="/postres" className="hover:text-yellow-200">Postres</a>
                </li>
                <li>
                  <a href="/recipes" className="hover:text-yellow-200">Recetas</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-yellow-200">Contacto</a>
                </li>
              </ul>
            </div>
  
            {/* Sección de Información */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Información</h3>
              <p className="text-gray-200">Tu sitio de confianza para aprender a preparar los postres más deliciosos.</p>
              <p className="text-gray-200 mt-4">Todos los derechos reservados © 2024</p>
            </div>
  
            {/* Sección de Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Suscríbete al boletín</h3>
              <p className="text-gray-200 mb-4">Recibe nuestras recetas y noticias directamente en tu correo electrónico.</p>
              <form>
                <input
                  type="email"
                  placeholder="Introduce tu correo"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-yellow-600"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
  
          {/* Sección de Créditos y Derechos */}
          <div className="mt-12 text-center text-gray-200">
            <p>Diseñado con ❤️ por tu nombre o tu empresa</p>
          </div>
        </div>
      </footer>
    );
  }
  