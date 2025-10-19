import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import Navbar from "./Navbar";

const MostrarCarrito = () => {
  return (
    <>
      <Navbar />
      <div className="card my-5">
        <div className="card-content center-align">
          <span className="card-title">Tus Productos</span>

          <div className="empty-cart center-align" style={{ marginTop: "2rem" }}>
            <i className="material-icons large">remove_shopping_cart</i>
            <h5>Tu carrito está vacío</h5>
            <p>Agrega algunos productos desde nuestra tienda</p>
            <Link 
              to="/productos" 
              className="btn blue darken-3 waves-effect waves-light"
            >
              Ir a productos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostrarCarrito;
