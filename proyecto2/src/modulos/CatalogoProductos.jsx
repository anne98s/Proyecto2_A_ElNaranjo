import React, { useState } from 'react';
import Producto from './Producto';

function CatalogoProductos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto 1', categoria: 'Electrónica', descripcion: 'Descripción del Producto 1' },
    { id: 2, nombre: 'Producto 2', categoria: 'Ropa', descripcion: 'Descripción del Producto 2' },
    { id: 3, nombre: 'Producto 3', categoria: 'Hogar', descripcion: 'Descripción del Producto 3' },
  ]);

  const [carrito, setCarrito] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div>
        <h3>Filtrar por Categoría</h3>
        <button onClick={() => filtrarPorCategoria('Electrónica')}>Electrónica</button>
        <button onClick={() => filtrarPorCategoria('Ropa')}>Ropa</button>
        <button onClick={() => filtrarPorCategoria('Hogar')}>Hogar</button>
        <button onClick={() => filtrarPorCategoria('')}>Limpiar Filtros</button>
      </div>
      <div>
        {categoriaSeleccionada && <h3>Productos de la categoría: {categoriaSeleccionada}</h3>}
        <ul>
          {productos.map((producto) => (
            (!categoriaSeleccionada || producto.categoria === categoriaSeleccionada) && (
              <li key={producto.id}>
                <div>
                  <h4>{producto.nombre}</h4>
                  <p>{producto.descripcion}</p>
                  <button onClick={() => agregarAlCarrito(producto)}>Añadir al Carrito</button>
                </div>
              </li>
            )
          ))}
        </ul>
      </div>
      <div>
        <h3>Carrito de Compra</h3>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              <div>
                <h4>{producto.nombre}</h4>
                <button onClick={() => setCarrito(carrito.filter((p) => p.id !== producto.id))}>
                  Eliminar del Carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CatalogoProductos;
