// AdminPanel.tsx (Componente de Panel de Administrador)

import React from 'react';

interface AdminPanelProps {
  isAdmin: boolean;
  onDelete: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isAdmin, onDelete }) => {
  return (
    <div className="admin-panel">
      {isAdmin && (
        <button onClick={onDelete}>
          Eliminar Producto
        </button>
      )}
    </div>
  );
};

export default AdminPanel;
