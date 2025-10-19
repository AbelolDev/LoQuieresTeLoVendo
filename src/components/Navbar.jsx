import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LogoNavbar.css";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Inicializa el sidenav de Materialize y detecta sesión
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);

    const usuarioGuardado = localStorage.getItem("correo");
    if (usuarioGuardado) {
      setIsLoggedIn(true);
    }
  }, []);

  // Cierra sesión
  const handleLogout = () => {
    localStorage.removeItem("correo");
    localStorage.removeItem("contrasenia");
    setIsLoggedIn(false);
    navigate("/"); // Redirige al inicio
  };

  return (
    <>
      <nav className="blue darken-3 my-5 yellow">
        <div className="nav-wrapper">
          {/* Logo */}
          <img
            src={Logo}
            alt="Imagen de un logo generico"
            className="logo-navbar"
          />

          {/* Icono menú móvil */}
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          {/* Menú de escritorio */}
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/carrito">Mi carrito</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>

            {isLoggedIn ? (
              <li>
                <a
                  href="#!"
                  onClick={handleLogout}
                  className="white-text"
                  style={{ cursor: "pointer" }}
                >
                  Cerrar sesión
                </a>
              </li>
            ) : (
              <li><Link to="/iniciar_sesion">Iniciar sesión</Link></li>
            )}
          </ul>
        </div>
      </nav>

      {/* Menú móvil */}
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/carrito">Mi carrito</Link></li>
        <li><Link to="/productos">Productos</Link></li>

        {isLoggedIn ? (
          <li>
            <a
              href="#!"
              onClick={handleLogout}
              className="black-text"
              style={{ cursor: "pointer" }}
            >
              Cerrar sesión
            </a>
          </li>
        ) : (
          <li><Link to="/iniciar_sesion">Iniciar sesión</Link></li>
        )}
      </ul>
    </>
  );
};

export default Navbar;
