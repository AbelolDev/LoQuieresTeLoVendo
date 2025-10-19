import React from "react";
import AdminPanelSummary from "../components/AdminPanelSummary";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminCard from "../components/AdminCard";

const AdminPanel = () => {
  const summaryData = {
    productos: 120,
    usuarios: 45,
    reportes: 15,
    alertas: 3,
  };

  return (
    <>
      <NavbarAdmin />

      <section className="container my-5">
        <h4 className="center-align">Panel de Administración</h4>
        <AdminPanelSummary data={summaryData} />

        <h5 className="center-align mt-5">Accesos rápidos</h5>
        <div className="row">
          <AdminCard
            icon="shopping_cart"
            iconColor="green-text"
            title="Productos"
            description="Gestiona los productos de la tienda."
            buttonColor="green"
            linkTo="/admin_panel/productos"
          />
          <AdminCard
            icon="group"
            iconColor="blue-text"
            title="Usuarios"
            description="Gestiona los usuarios registrados."
            buttonColor="blue"
            linkTo="/admin_panel/usuarios"
          />
        </div>
      </section>
    </>
  );
};

export default AdminPanel;