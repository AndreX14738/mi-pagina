export default function Postres() {
    const postres = [
      {
        nombre: 'Tarta de Chocolate con Frambuesas',
        descripcion: 'Una tarta decadente de chocolate oscuro, decorada con frambuesas frescas y crema chantilly.',
        imagen: '4.webp',
      },
      {
        nombre: 'Mousse de Mango y Maracuyá',
        descripcion: 'Mousse suave y cremoso de mango, complementado con una capa de maracuyá ácido.',
        imagen: '3.webp',
      },
      {
        nombre: 'Cheesecake de Frutos Rojos',
        descripcion: 'Base crujiente de galleta con queso suave y cubierto con coulis de frutos rojos.',
        imagen: '12.webp',
      },
      {
        nombre: 'Tiramisú Clásico',
        descripcion: 'Bizcocho empapado en café, intercalado con mascarpone suave. Perfecto para los amantes del café.',
        imagen: '11.webp',
      },
      {
        nombre: 'Pavlova de Frutas Exóticas',
        descripcion: 'Merengue crujiente cubierto con una mezcla de frutas exóticas como kiwi, maracuyá y fresas.',
        imagen: '13.webp',
      },
      {
        nombre: 'Macarons de Vainilla y Pistacho',
        descripcion: 'Delicados macarons de merengue con crema suave de pistacho o vainilla.',
        imagen: '15.webp',
      },
      {
        nombre: 'Tarta de Limón y Merengue',
        descripcion: 'Tarta de limón con merengue dorado en la parte superior, deliciosa y visualmente atractiva.',
        imagen: '16.webp',
      },
      {
        nombre: 'Crème Brûlée',
        descripcion: 'Crema suave con un toque crujiente de azúcar caramelizado en la parte superior.',
        imagen: '17.webp',
      },
     
    ];
  
    return (
      <div className="bg-gradient-to-br from-yellow-300 to-orange-500 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-4xl font-bold text-yellow-100 mb-8">Postres Deliciosos</h1>
          <p className="text-lg text-yellow-200 mb-12">Descubre los postres más sabrosos y fáciles de seguir.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {postres.map((postre, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={postre.imagen} alt={postre.nombre} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-yellow-800 mb-4">{postre.nombre}</h3>
                  <p className="text-gray-700 mb-6">{postre.descripcion}</p>
                  <button className="">
            
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  