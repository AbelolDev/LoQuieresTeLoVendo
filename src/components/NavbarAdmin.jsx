import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("correo");
    localStorage.removeItem("contrasenia");

    M.toast({ html: "Has cerrado sesión correctamente", classes: "blue" });

    navigate("/");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <nav className="blue darken-3 yellow">
        <div className="nav-wrapper container">
          <Link to="/admin_panel" className="brand-logo">
            Admin
          </Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li className={isActive("/admin_panel/productos")}>
              <Link to="/admin_panel/productos">Productos</Link>
            </li>
            <li className={isActive("/admin_panel/usuarios")}>
              <Link to="/admin_panel/usuarios">Usuarios</Link>
            </li>
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
          </ul>
        </div>
      </nav>

      {/* Sidenav para móviles */}
      <ul className="sidenav" id="mobile-demo">
        <li className={isActive("/admin_panel/productos")}>
          <Link to="/admin_panel/productos">Productos</Link>
        </li>
        <li className={isActive("/admin_panel/usuarios")}>
          <Link to="/admin_panel/usuarios">Usuarios</Link>
        </li>
        <li>
          <a
            href="#!"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            Cerrar sesión
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavbarAdmin;
