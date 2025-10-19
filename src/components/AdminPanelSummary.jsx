import React from "react";

const AdminPanelSummary = ({ data }) => {
  // Evitamos errores si `data` llega indefinido
  if (!data) return null;

  return (
    <div className="row">
      {/* Productos */}
      <div className="col s12 m3">
        <div className="card-panel center green lighten-4">
          <i className="material-icons large green-text">shopping_cart</i>
          <h5 className="black-text">Productos</h5>
          <h4 className="black-text">{data.productos}</h4>
        </div>
      </div>

      {/* Usuarios */}
      <div className="col s12 m3">
        <div className="card-panel center blue lighten-4">
          <i className="material-icons large blue-text">group</i>
          <h5 className="black-text">Usuarios</h5>
          <h4 className="black-text">{data.usuarios}</h4>
        </div>
      </div>

      {/* Reportes */}
      <div className="col s12 m3">
        <div className="card-panel center amber lighten-4">
          <i className="material-icons large amber-text">assessment</i>
          <h5 className="black-text">Reportes</h5>
          <h4 className="black-text">{data.reportes}</h4>
        </div>
      </div>

      {/* Alertas */}
      <div className="col s12 m3">
        <div className="card-panel center red lighten-4">
          <i className="material-icons large red-text">warning</i>
          <h5 className="black-text">Alertas</h5>
          <h4 className="black-text">{data.alertas}</h4>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelSummary;
