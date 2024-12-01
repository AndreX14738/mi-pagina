export default function PerfilChef() {
    return (
      <section className="bg-yellow-300 py-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Encabezado */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Chef Estrella: <span className="text-white-500">Angel Andres Rocha Gomez</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Imagen del Chef */}
            <img
              src="a.webp"
              alt="Chef Juan García"
              className="w-full md:w-1/3 object-cover"
            />
            {/* Información del Chef */}
            <div className="p-8 md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                MI PERFIL DE CHEFS
              </h2>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Maestro de la Repostería
              </h2>
              <p className="text-gray-700 mb-4">
                Con más de 20 años de experiencia en la cocina, el Chef Angel Andres Rocha GOMEZ es conocido mundialmente por su habilidad para crear postres irresistibles. Sus creaciones han sido destacadas en revistas gastronómicas y programas de televisión.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Especialidades:
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Tartas de frutas frescas</li>
                <li>Postres gourmet con chocolate</li>
                <li>Pastelería francesa</li>
                <li>Recetas innovadoras con ingredientes locales</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Premios y Reconocimientos:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Ganador del premio "Mejor Chef Repostero" en 2023</li>
                <li>Invitado especial en MasterChef Internacional</li>
                <li>Autor del bestseller "Dulces Sueños: Recetas de Ensueño"</li>
              </ul>
              {/* Redes sociales */}
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692v-3.63h3.128V8.413c0-3.1 1.892-4.789 4.656-4.789 1.325 0 2.464.099 2.795.143v3.24h-1.916c-1.502 0-1.793.714-1.793 1.763v2.311h3.585l-.467 3.63h-3.118V24h6.102c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.13 4.723.346 3.828.65a6.69 6.69 0 0 0-2.416 1.58A6.692 6.692 0 0 0 .65 4.834c-.304.895-.52 1.947-.579 3.225C.014 8.667 0 9.074 0 12c0 2.926.014 3.333.071 4.613.059 1.278.275 2.33.579 3.225.304.895.715 1.682 1.58 2.416a6.69 6.69 0 0 0 2.416 1.58c.895.304 1.947.52 3.225.579 1.28.058 1.687.072 4.613.072s3.333-.014 4.613-.072c1.278-.059 2.33-.275 3.225-.579a6.69 6.69 0 0 0 2.416-1.58 6.692 6.692 0 0 0 1.58-2.416c.304-.895.52-1.947.579-3.225.058-1.28.072-1.687.072-4.613s-.014-3.333-.072-4.613c-.059-1.278-.275-2.33-.579-3.225a6.69 6.69 0 0 0-1.58-2.416A6.692 6.692 0 0 0 20.172.65c-.895-.304-1.947-.52-3.225-.579C15.333.014 14.926 0 12 0zm0 2.162c2.908 0 3.258.012 4.415.066 1.087.05 1.677.23 2.07.38a4.54 4.54 0 0 1 1.626.976 4.54 4.54 0 0 1 .976 1.626c.15.393.33.983.38 2.07.054 1.157.066 1.507.066 4.415s-.012 3.258-.066 4.415c-.05 1.087-.23 1.677-.38 2.07a4.54 4.54 0 0 1-.976 1.626 4.54 4.54 0 0 1-1.626.976c-.393.15-.983.33-2.07.38-1.157.054-1.507.066-4.415.066s-3.258-.012-4.415-.066c-1.087-.05-1.677-.23-2.07-.38a4.54 4.54 0 0 1-1.626-.976 4.54 4.54 0 0 1-.976-1.626c-.15-.393-.33-.983-.38-2.07-.054-1.157-.066-1.507-.066-4.415s.012-3.258.066-4.415c.05-1.087.23-1.677.38-2.07a4.54 4.54 0 0 1 .976-1.626 4.54 4.54 0 0 1 1.626-.976c.393-.15.983-.33 2.07-.38 1.157-.054 1.507-.066 4.415-.066z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
