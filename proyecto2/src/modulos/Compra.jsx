import React, { useState } from 'react';

const ModuloCompras = () => {
  const [carrito, setCarrito] = useState([]);
  const [tokenValido, setTokenValido] = useState(true); // Simulación de validación de token

  const procesarCompra = () => {
    if (tokenValido) {
      // Lógica para descontar del inventario
      // ...
      // Limpiar el carrito después de la compra
      setCarrito([]);
      alert('¡Compra exitosa!');
    } else {
      alert('Error: Token de acceso inválido');
    }
  };

  return (
    <div>
      <h2>Carrito de Compra</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
      <button onClick={procesarCompra}>Procesar Compra</button>
    </div>
  );
};

export default ModuloCompras;
