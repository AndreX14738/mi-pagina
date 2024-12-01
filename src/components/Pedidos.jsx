import { useState } from "react";

export default function Pedidos() {
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const postres = [
    {
      id: 1,
      nombre: 'Tarta de Chocolate con Frambuesas',
      descripcion: 'Una tarta decadente de chocolate oscuro, decorada con frambuesas frescas.',
      imagen: '1.webp',
      precio: 12.99,
    },
    {
      id: 2,
      nombre: 'Mousse de Mango y Maracuyá',
      descripcion: 'Mousse suave de mango con una capa de maracuyá ácido.',
      imagen: '3.webp',
      precio: 10.49,
    },
    {
      id: 3,
      nombre: 'Cheesecake de Frutos Rojos',
      descripcion: 'Base crujiente de galleta con queso suave, cubierto con frutos rojos.',
      imagen: '13.webp',
      precio: 9.99,
    },
    {
      id: 4,
      nombre: 'Tiramisú Clásico',
      descripcion: 'Bizcocho empapado en café, intercalado con mascarpone suave.',
      imagen: '11.webp',
      precio: 8.99,
    },
  ];

  const agregarAlCarrito = (postre) => {
    setCarrito([...carrito, { ...postre, cantidad }]);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
  };

  return (
    <div className="bg-gradient-to-br from-yellow-300 to-orange-500 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
        <h1 className="text-4xl font-bold text-yellow-100 mb-8">Realiza tu Pedido</h1>
        <p className="text-lg text-yellow-200 mb-12">Selecciona los postres y realiza tu pedido de forma sencilla.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {postres.map((postre) => (
            <div key={postre.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={postre.imagen} alt={postre.nombre} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-800 mb-4">{postre.nombre}</h3>
                <p className="text-gray-700 mb-6">{postre.descripcion}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-yellow-700 font-bold text-lg">${postre.precio}</p>
                  <input
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    min="1"
                    className="w-12 px-2 py-1 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  onClick={() => agregarAlCarrito(postre)}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carrito de Compras */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-800 mb-6">Tu Carrito</h2>
          {carrito.length === 0 ? (
            <p className="text-lg text-gray-600">No has agregado productos aún.</p>
          ) : (
            <ul className="space-y-4">
              {carrito.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-gray-800">
                  <p>{item.nombre} x{item.cantidad}</p>
                  <p>${(item.precio * item.cantidad).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-yellow-800">Total:</h3>
            <p className="text-xl text-yellow-700 font-semibold">${calcularTotal()}</p>
          </div>
          <button
            className="mt-6 w-full py-2 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
            disabled={carrito.length === 0}
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
