import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

//Mock global de MaterializeCSS
global.M = {
  Sidenav: {
    init: vi.fn(),
  },
};

//Mock de la imagen (para evitar errores de importación en Vitest)
vi.mock("../assets/img/logo.png", () => ({
  default: "logo.png",
}));

describe("Componente Navbar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("inicializa el sidenav al montar el componente", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que se haya llamado a M.Sidenav.init
    expect(M.Sidenav.init).toHaveBeenCalled();
  });

  it("renderiza el logo y los enlaces correctamente", () => {
    const { getByAltText, getAllByRole, getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Verifica que el logo se renderiza
    const logo = getByAltText("Imagen de un logo generico");
    expect(logo).toBeTruthy();
    expect(logo.getAttribute("src")).toBe("logo.png");

    // Verifica enlaces principales
    expect(getByText("Inicio")).toBeTruthy();
    expect(getByText("Mi carrito")).toBeTruthy();
    expect(getByText("Productos")).toBeTruthy();
    expect(getByText("Iniciar sesión")).toBeTruthy();

    // Verifica que haya más de un enlace (en navbar + sidenav)
    const links = getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(4);
  });

  it("renderiza el botón del menú móvil", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const trigger = container.querySelector(".sidenav-trigger");
    expect(trigger).toBeTruthy();
    expect(trigger.getAttribute("data-target")).toBe("mobile-demo");
  });
});
