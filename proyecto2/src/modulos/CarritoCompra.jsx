import React, { useState } from 'react';

const CarritoCompra = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([
    { id: 1, nombre: 'Producto 1', cantidad: 2, precioUnitario: 10 },
    { id: 2, nombre: 'Producto 2', cantidad: 1, precioUnitario: 20 },
  ]);

  const eliminarProducto = (id) => {
    const nuevosProductos = productosEnCarrito.filter(producto => producto.id !== id);
    setProductosEnCarrito(nuevosProductos);
  };

  const reservarProducto = (id) => {
    // Aquí se implementaría la lógica para cambiar el estado del producto a "reservado"
  };

  const totalAPagar = productosEnCarrito.reduce((total, producto) => total + (producto.cantidad * producto.precioUnitario), 0);

  return (
    <div>
      <h2>Carrito de Compra</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosEnCarrito.map(producto => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precioUnitario}</td>
              <td>${producto.cantidad * producto.precioUnitario}</td>
              <td>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                <button onClick={() => reservarProducto(producto.id)}>Reservar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total a Pagar: ${totalAPagar}</h3>
      </div>
    </div>
  );
};

export default CarritoCompra;
