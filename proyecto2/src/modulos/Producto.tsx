// Product.tsx (Componente de Producto)

import React from 'react';

interface ProductoProps {
  nombre: string;
  descripcion: string;
  categoria: string[];
  precio: number;
  disponibilidad: number;
}

const Producto: React.FC<ProductoProps> = ({ nombre, descripcion, categoria, precio, disponibilidad }) => {
  return (
    <div className="producto">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Categoría: {categoria.join(', ')}</p>
      <p>Precio: ${precio}</p>
      <p>Disponibilidad: {disponibilidad}</p>
    </div>
  );
};

export default Producto;
