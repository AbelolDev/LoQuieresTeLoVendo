import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminUsuarioNuevo = ({ addUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo) {
      M.toast({ html: "Completa todos los campos", classes: "red" });
      return;
    }

    const nuevoUsuario = { id: Date.now(), nombre, correo };
    addUsuario(nuevoUsuario);

    M.toast({ html: "Usuario agregado correctamente", classes: "green" });

    navigate("/admin_panel/usuarios");
  };

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Agregar Usuario</h5>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label>Nombre</label>
          </div>

          <div className="input-field">
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <label>Correo</label>
          </div>

          <button type="submit" className="btn green">
            Guardar
          </button>
        </form>
      </main>
    </>
  );
};

export default AdminUsuarioNuevo;
