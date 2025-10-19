import React from "react";
import { Link } from "react-router-dom";
import UsuarioTable from "../../../components/AdminTablaUsuarios";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminUsuarios = ({ usuarios, deleteUsuario }) => {
  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Lista de Usuarios</h5>

        <div style={{ textAlign: "right", marginBottom: "1rem" }}>
          <Link
            to="/admin_panel/usuarios/usuario_nuevo"
            className="btn green tooltipped"
            data-tooltip="Agregar usuario"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>

        <UsuarioTable usuarios={usuarios} onDelete={deleteUsuario} />
      </main>
    </>
  );
};

export default AdminUsuarios;
