import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/index.jsx";
import Carrito from "./pages/Carrito.jsx";
import Productos from "./pages/public/productos.jsx";
import Iniciar from "./pages/public/iniciar.jsx";

import Admin_panel from "./pages/Admin_panel.jsx";
import AdminProductos from "./pages/admin/productos/AdminProductos.jsx";
import AdminProductoNuevo from "./pages/admin/productos/AdminProductoNuevo.jsx";
import AdminProductoEditar from "./pages/admin/productos/AdminProductosEditar.jsx";

import AdminUsuarios from "./pages/admin/usuarios/AdminUsuarios.jsx";
import AdminUsuarioNuevo from "./pages/admin/usuarios/AdminUsuariosNuevo.jsx";
import AdminUsuarioEditar from "./pages/admin/usuarios/AdminUsuariosEditar.jsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto demo", precio: 5000 },
    { id: 2, nombre: "Producto ejemplo", precio: 8500 },
  ]);

  const addProducto = (nuevo) => setProductos((prev) => [...prev, nuevo]);
  const updateProducto = (id, datos) =>
    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...datos } : p))
    );
  const deleteProducto = (id) =>
    setProductos((prev) => prev.filter((p) => p.id !== id));

  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", correo: "juan@example.com" },
    { id: 2, nombre: "María López", correo: "maria@example.com" },
  ]);

  const addUsuario = (nuevo) => setUsuarios((prev) => [...prev, nuevo]);
  const updateUsuario = (id, datos) =>
    setUsuarios((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...datos } : u))
    );
  const deleteUsuario = (id) =>
    setUsuarios((prev) => prev.filter((u) => u.id !== id));

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Index />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/iniciar_sesion" element={<Iniciar />} />

        {/* Rutas de admin */}
        <Route path="/admin_panel" element={<Admin_panel />} />
        <Route
          path="/admin_panel/productos"
          element={
            <AdminProductos
              productos={productos}
              deleteProducto={deleteProducto}
            />
          }
        />
        <Route
          path="/admin_panel/productos/producto_nuevo"
          element={<AdminProductoNuevo addProducto={addProducto} />}
        />
        <Route
          path="/admin_panel/productos/editar/:id"
          element={
            <AdminProductoEditar
              productos={productos}
              updateProducto={updateProducto}
            />
          }
        />

        {/* CRUD Usuarios */}
        <Route
          path="/admin_panel/usuarios"
          element={
            <AdminUsuarios usuarios={usuarios} deleteUsuario={deleteUsuario} />
          }
        />
        <Route
          path="/admin_panel/usuarios/usuario_nuevo"
          element={<AdminUsuarioNuevo addUsuario={addUsuario} />}
        />
        <Route
          path="/admin_panel/usuarios/editar/:id"
          element={
            <AdminUsuarioEditar
              usuarios={usuarios}
              updateUsuario={updateUsuario}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
