import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import "../assets/css/style.css";

const Form = () => {
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const navigate = useNavigate();

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "correo") setCorreo(value);
    if (name === "contrasenia") setContrasenia(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !contrasenia) {
      M.toast({ html: "Por favor completa todos los campos", classes: "red" });
      return;
    }

    // Guardar datos de sesión en localStorage
    localStorage.setItem("correo", correo);
    localStorage.setItem("contrasenia", contrasenia);

    // Mensaje de éxito
    M.toast({ html: "Sesión iniciada correctamente", classes: "green" });

    // Redirigir al panel admin
    navigate("/admin_panel");
  };

  return (
    <section className="section container my-5">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Iniciar sesión</span>

              <form className="loginForm" onSubmit={handleSubmit}>
                {/* Campo de correo */}
                <div className="input-field">
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={correo}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="correo">Ingrese su correo:</label>
                </div>

                {/* Campo de contraseña */}
                <div className="input-field">
                  <input
                    type="password"
                    id="contrasenia"
                    name="contrasenia"
                    value={contrasenia}
                    onChange={handleChange}
                    required
                    minLength="8"
                  />
                  <label htmlFor="contrasenia">Ingrese su contraseña:</label>
                  <span
                    className="helper-text"
                    data-error="La contraseña debe tener mínimo 8 caracteres"
                    data-success="Contraseña válida"
                  ></span>
                </div>

                {/* Botón de envío */}
                <button type="submit" className="btn blue darken-3">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
