import React, { useState, useContext } from 'react';

// Creamos un contexto para almacenar la información del usuario
const UsuarioContext = React.createContext();

function Login() {
  const [usuario, setUsuario] = useState({
    email: '',
    contraseña: '',
  });

  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  // Función para validar el formato del correo electrónico
  const validarEmail = (email) => {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValido.test(email);
  };

  // Función para validar la contraseña
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

    if (!validarContraseña(usuario.contraseña)) {
      nuevosErrores.contraseña =
        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setExito(false);
    } else {
      // Aquí se realizaría la autenticación y generación del token de acceso
      // ...

      // Simulación de autenticación exitosa
      setExito(true);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form enviarDatos ={valorEnviado}>
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
            Contraseña:
            <input
              tipo="password"
              nombre="contraseña"
              valor={usuario.contraseña}
              valorSalida={valorEntrada}
              required
            />
          </label>
          {errores.contraseña && (
            <div classnombre="error">{errores.contraseña}</div>
          )}
        </div>
        <button ti="submit">Iniciar Sesión</button>
      </form>
      {exito && <div classnombre="exito">Inicio de sesión exitoso</div>}
    </div>
  );
}

// Función de contexto para proporcionar información del usuario y funciones de autenticación
function UsuarioPadre({ children }) {
  const [usuario, setUsuario] = useState(null);

  const iniciarSesion = (userData) => {
    // Aquí se realizaría la autenticación y generación del token de acceso
    // ...

    // Simulación de autenticación exitosa
    setUsuario(userData);
  };

  const cerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <UsuarioContext.Provider valor={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de usuario
function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario debe ser usado dentro de un UsuarioPadre');
  }
  return context;
}

export { Login, UsuarioPadre, useUsuario };


