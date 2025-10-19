import React from "react";
import Navbar from "../../components/Navbar"

const blogsData = [
  {
    id: 1,
    titulo: "Cómo elegir el mejor producto",
    descripcion: "Te damos consejos para seleccionar lo que realmente necesitas.",
    link: "#!"
  },
  {
    id: 2,
    titulo: "Tendencias en tecnología 2025",
    descripcion: "Conoce las novedades más importantes en tecnología este año.",
    link: "#!"
  },
  {
    id: 3,
    titulo: "Tips para ahorrar dinero comprando online",
    descripcion: "Aprovecha las ofertas y promociones sin gastar de más.",
    link: "#!"
  },
];

const Blogs = () => {
  return (
    <>
      <Navbar />
      <section className="container my-5">
        <h4 className="center-align">Blog</h4>
        <div className="row">
          {blogsData.map((blog) => (
            <div className="col s12 m6 l4" key={blog.id}>
              <div className="card">
                <div className="card-content">
                  <span className="card-title">{blog.titulo}</span>
                  <p>{blog.descripcion}</p>
                </div>
                <div className="card-action">
                  <a
                    href={blog.link}
                    className="btn blue darken-3 waves-effect waves-light"
                  >
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
