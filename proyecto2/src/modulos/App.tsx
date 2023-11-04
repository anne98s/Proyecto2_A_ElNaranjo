// App.tsx (Componente Principal)

import React, { useState } from 'react';
import ProductList from './ProductList';
import AdminPanel from './AdminPanel';

const App: React.FC = () => {
  const [productos, setProductos] = useState<ProductoProps[]>([
    { nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', categoria: ['Electrónica'], precio: 100, disponibilidad: 10 },
    { nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', categoria: ['Ropa'], precio: 50, disponibilidad: 5 },
  ]);

  const [isAdmin, setIsAdmin] = useState(false);

  const handleDelete = () => {
    // Lógica de eliminación aquí
  };

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>
      <ProductList productos={productos} />
      <AdminPanel isAdmin={isAdmin} onDelete={handleDelete} />
    </div>
  );
};

export default App;
