export default function Home() {
    return (
      <div className="bg-gradient-to-br from-yellow-300 to-orange-500 min-h-screen flex flex-col justify-center items-center text-center text-white">
  
        {/* Hero Section */}
        <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url(1.1.1.webp)' }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
            <h1 className="text-6xl font-extrabold text-yellow-100 mb-6 leading-tight drop-shadow-lg">
              ¡Explora el mundo de los postres mas deliciosos!
            </h1>
          </div>
        </div>
  
        {/* Postres Destacados Section */}
        <div className="py-24 bg-gradient-to-l from-yellow-200 via-yellow-300 to-orange-300">
          <h2 className="text-4xl font-semibold text-center text-yellow-800 mb-12">
            Postres Destacados
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-8 lg:px-10">
            
            {/* Postre 1 */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src="1.webp" alt="Tarta de Chocolate" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Tarta de Chocolate</h3>
                <p className="text-gray-600 mb-4">Una deliciosa tarta de chocolate que derretirá tu corazón. Perfecta para cualquier ocasión.</p>
             
              </div>
            </div>
  
            {/* Postre 2 */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src="2.webp" alt="Galletas de Vainilla" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Galletas de Vainilla</h3>
                <p className="text-gray-600 mb-4">Receta fácil y rápida para hacer galletas de vainilla con un toque de canela.</p>
               
              </div>
            </div>
  
            {/* Postre 3 */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300">
              <img src="10.webp" alt="Flan Casero" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-4">Flan Casero</h3>
                <p className="text-gray-600 mb-4">Un flan casero, suave y delicioso, que hará las delicias de todos en casa.</p>
               
              </div>
            </div>
  
          </div>
        </div>
  
        {/* Footer */}
        <footer className="py-6 bg-yellow-700 text-white w-full text-center">
          <p className="text-sm">
            &copy; 2024 Postres & Recetas | Todos los derechos reservados
          </p>
        </footer>
      </div>
    );
  }
  