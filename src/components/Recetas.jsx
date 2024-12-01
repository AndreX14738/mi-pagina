export default function Recetas() {
    const recetas = [
      {
        id: 1,
        nombre: 'Tarta de Chocolate con Frambuesas',
        ingredientes: [
          '200g de chocolate negro',
          '100g de mantequilla',
          '3 huevos',
          '150g de azúcar',
          'Frambuesas frescas',
          'Crema chantilly',
        ],
        instrucciones: [
          '1. Precalienta el horno a 180°C.',
          '2. Derrite el chocolate y la mantequilla en un bol al baño maría.',
          '3. Batir los huevos con el azúcar hasta que la mezcla se vuelva espesa.',
          '4. Agrega el chocolate derretido a la mezcla de huevos y azúcar.',
          '5. Vierte la mezcla en un molde engrasado y hornea durante 25-30 minutos.',
          '6. Deja enfriar, adorna con frambuesas y crema chantilly.',
        ],
        imagen: '1.webp',
      },
      {
        id: 2,
        nombre: 'Mousse de Mango y Maracuyá',
        ingredientes: [
          '1 mango maduro',
          '100g de pulpa de maracuyá',
          '200ml de crema para batir',
          '100g de azúcar',
          'Gelatina sin sabor',
        ],
        instrucciones: [
          '1. Hidrata la gelatina según las instrucciones del paquete.',
          '2. Licúa el mango y la pulpa de maracuyá con el azúcar.',
          '3. Bate la crema hasta que esté firme y mezcla con la fruta.',
          '4. Agrega la gelatina disuelta y mezcla bien.',
          '5. Vierte la mezcla en copas y refrigera por 3 horas.',
        ],
        imagen: '3.webp',
      },
      {
        id: 3,
        nombre: 'Cheesecake de Frutos Rojos',
        ingredientes: [
          '200g de galletas Digestive',
          '100g de mantequilla derretida',
          '300g de queso crema',
          '150g de azúcar',
          '200ml de nata líquida',
          'Frutos rojos (fresas, frambuesas, moras)',
        ],
        instrucciones: [
          '1. Tritura las galletas y mezcla con la mantequilla derretida.',
          '2. Vierte la mezcla de galletas en un molde y presiona para formar la base.',
          '3. Bate el queso crema con el azúcar hasta que quede suave.',
          '4. Añade la nata líquida y bate hasta que la mezcla esté firme.',
          '5. Vierte sobre la base de galletas y refrigera por 4 horas.',
          '6. Decora con frutos rojos antes de servir.',
        ],
        imagen: '13.webp',
      },
    ];
  
    return (
      <div className="bg-gradient-to-br from-yellow-300 to-orange-500 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
          <h1 className="text-4xl font-bold text-yellow-100 mb-8">Recetas Deliciosas</h1>
          <p className="text-lg text-yellow-200 mb-12">Explora nuestras mejores recetas de postres, fáciles de preparar y deliciosas.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
            {recetas.map((receta) => (
              <div key={receta.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={receta.imagen} alt={receta.nombre} className="w-full h-56 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-yellow-800 mb-4">{receta.nombre}</h3>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">Ingredientes</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-6">
                    {receta.ingredientes.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-yellow-600 mb-4">Instrucciones</h4>
                  <ol className="list-decimal list-inside text-gray-700">
                    {receta.instrucciones.map((instruccion, index) => (
                      <li key={index}>{instruccion}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  