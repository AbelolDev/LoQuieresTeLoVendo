import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import M from "materialize-css";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminUsuarioEditar = ({ usuarios, updateUsuario }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const usuario = usuarios.find((u) => u.id === Number(id));

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    if (usuario) {
      setNombre(usuario.nombre);
      setCorreo(usuario.correo);
    }
  }, [usuario]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo) {
      M.toast({ html: "Completa todos los campos", classes: "red" });
      return;
    }

    updateUsuario(usuario.id, { nombre, correo });

    M.toast({ html: "Usuario actualizado correctamente", classes: "green" });

    navigate("/admin_panel/usuarios");
  };

  if (!usuario) return <p>Usuario no encontrado</p>;

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
      <h5>Editar Usuario</h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label className="active">Nombre</label>
        </div>

        <div className="input-field">
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <label className="active">Correo</label>
        </div>

        <button type="submit" className="btn blue">
          Guardar Cambios
        </button>
      </form>
    </main>
    </>
  );
};

export default AdminUsuarioEditar;
