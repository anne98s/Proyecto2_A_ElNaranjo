import React, { useState } from 'react';

function PerfilUsuario() {
  const [usuario, setUsuario] = useState({
    nit: '',
    dpi: '',
    correo: '',
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const validarEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    // Validación del token (simulada con una variable "token" aquí)
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token inválido. Por favor, inicie sesión.');
      return;
    }

    if (usuario.nit.length === 0 || usuario.dpi.length === 0 || usuario.correo.length === 0) {
      nuevosErrores.camposVacios = 'Todos los campos son obligatorios';
    }

    // Validación de duplicados (simulada con una función "verificarDuplicados")
    const duplicados = verificarDuplicados(usuario);
    if (duplicados) {
      nuevosErrores.duplicados = 'El NIT, DPI o Correo ya están registrados';
    }

    if (!validarEmail(usuario.correo)) {
      nuevosErrores.correo = 'Ingrese un correo electrónico válido';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setExito(false);
    } else {
      // Proceso de actualización del perfil y eliminación de cuenta (simulado)
      alert('Perfil actualizado exitosamente');
      // Aquí deberías implementar la lógica real de actualización y eliminación
      setUsuario({
        nit: '',
        dpi: '',
        correo: '',
      });
      setErrores({});
      setExito(true);
    }
  };

  const verificarDuplicados = (usuario) => {
    // Simulación de verificación de duplicados (debería ser una llamada a la base de datos)
    const usuariosRegistrados = [
      { nit: '123456789', dpi: '987654321', correo: 'test1@example.com' },
      { nit: '987654321', dpi: '123456789', correo: 'test2@example.com' },
    ];

    return usuariosRegistrados.some(
      (u) => u.nit === usuario.nit || u.dpi === usuario.dpi || u.correo === usuario.correo
    );
  };

  const handleEliminarCuenta = () => {
    // Aquí deberías implementar la lógica real de eliminación de cuenta
    alert('Cuenta eliminada exitosamente');
    localStorage.removeItem('token'); // Simulación de invalidación de token
  };

  return (
    <div>
      <h2>Gestión de Perfil de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            NIT:
            <input
              type="text"
              name="nit"
              value={usuario.nit}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            DPI:
            <input
              type="text"
              name="dpi"
              value={usuario.dpi}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correo"
              value={usuario.correo}
              onChange={handleInputChange}
              required
            />
          </label>
          {errores.correo && <div className="error">{errores.correo}</div>}
        </div>
        <button type="submit">Actualizar Perfil</button>
      </form>
      {errores.camposVacios && <div className="error">{errores.camposVacios}</div>}
      {errores.duplicados && <div className="error">{errores.duplicados}</div>}
      {exito && <div className="exito">Perfil actualizado exitosamente</div>}
      <button onClick={handleEliminarCuenta}>Eliminar Cuenta</button>
    </div>
  );
}

export default PerfilUsuario;
