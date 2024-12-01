import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-white hover:text-yellow-200 transition duration-300 flex items-center">
          <span role="img" aria-label="cake">🍰</span> ROCHEFS
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-200 transition duration-300">Home</Link>
          <Link to="/postres" className="hover:text-yellow-200 transition duration-300">Postres</Link>
          <Link to="/recetas" className="hover:text-yellow-200 transition duration-300">Recetas</Link>
          <Link to="/pedidos" className="hover:text-yellow-200 transition duration-300">Pedidos</Link>
          <Link to="/contacto" className="hover:text-yellow-200 transition duration-300">Contacto</Link>
          <Link to="/perfil" className="hover:text-yellow-200 transition duration-300">Perfil</Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            onClick={() => alert("Implementar menú móvil aquí. 🚧")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
