import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const UsuarioTable = ({ usuarios, onDelete }) => {
  const handleDelete = (id) => {
    M.toast({ html: "Usuario eliminado", classes: "red" });
    onDelete(id);
  };

  return (
    <table className="highlight responsive-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((u) => (
          <tr key={u.id}>
            <td>{u.nombre}</td>
            <td>{u.correo}</td>
            <td>
              <Link
                to={`/admin_panel/usuarios/editar/${u.id}`}
                className="btn-small blue"
              >
                <i className="material-icons">edit</i>
              </Link>
              <button
                className="btn-small red"
                onClick={() => handleDelete(u.id)}
              >
                <i className="material-icons">delete</i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsuarioTable;
