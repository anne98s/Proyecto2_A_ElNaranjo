import React, { useState } from 'react';

function RegistroUsuarios() {
  const [usuario, setUsuario] = useState({
    email: '',
    nit: '',
    dpi: '',
    contraseña: '',
    confirmarContraseña: '',
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  const validarEmail = (email) => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValido.test(email);
  };

  const validarContraseña = (contraseña) => {
    const contraseñaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return contraseñaValida.test(contraseña);
  };

  const valorEntrada = (e) => {
    const { nombre, valor } = e.target;
    setUsuario({ ...usuario, [nombre]: valor });
  };

  const valorEnviado = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!validarEmail(usuario.email)) {
      nuevosErrores.email = 'Ingrese un correo electrónico válido';
    }

    if (usuario.nit.length === 0) {
      nuevosErrores.nit = 'El campo NIT es obligatorio';
    }

    if (usuario.dpi.length === 0) {
      nuevosErrores.dpi = 'El campo DPI es obligatorio';
    }

    if (!validarContraseña(usuario.contraseña)) {
      nuevosErrores.contraseña =
        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial';
    }

    if (usuario.contraseña !== usuario.confirmarContraseña) {
      nuevosErrores.confirmarContraseña = 'Las contraseñas no coinciden';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setExito(false);
    } else {
      setErrores({});
      setExito(true);
    }
  };

  return (
    <div>
      <h2>Registro de Usuarios</h2>
      <form enviarDatos={valorEnviado}>
        <div>
          <label>
            Correo Electrónico:
            <input
              tipo="email"
              nombre="email"
              valor={usuario.email}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.email && <div classnombre="error">{errores.email}</div>}
        </div>
        <div>
          <label>
            NIT:
            <input
              tipo="text"
              nombre="nit"
              valor={usuario.nit}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.nit && <div classnombre="error">{errores.nit}</div>}
        </div>
        <div>
          <label>
            DPI:
            <input
              tipo="text"
              nombre="dpi"
              valor={usuario.dpi}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.dpi && <div classnombre="error">{errores.dpi}</div>}
        </div>
        <div>
          <label>
            Contraseña:
            <input
              tipo="password"
              nombre="contraseña"
              valor={usuario.contraseña}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.contraseña && <div classnombre="error">{errores.contraseña}</div>}
        </div>
        <div>
          <label>
            Confirmar Contraseña:
            <input
              tipo="password"
              nombre="confirmarContraseña"
              valor={usuario.confirmarContraseña}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.confirmarContraseña && (
            <div classnombre="error">{errores.confirmarContraseña}</div>
          )}
        </div>
        <button tipo="submit">Registrarse</button>
      </form>
      {exito && <div classnombre="exito">Registro exitoso</div>}
    </div>
  );
}

export default RegistroUsuarios;
