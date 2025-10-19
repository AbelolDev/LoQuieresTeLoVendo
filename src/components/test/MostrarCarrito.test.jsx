import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import MostrarCarrito from "../components/MostrarCarrito";

// 🔹 Mock del componente Navbar para aislar la prueba
vi.mock("../components/Navbar", () => ({
  default: () => <nav data-testid="navbar">Mock Navbar</nav>,
}));

describe("Componente MostrarCarrito", () => {
  it("renderiza correctamente el mensaje de carrito vacío y el botón", () => {
    const { getByText, getByRole, getByTestId, container } = render(
      <MemoryRouter>
        <MostrarCarrito />
      </MemoryRouter>
    );

    // Verificar que Navbar se renderiza
    expect(getByTestId("navbar")).toBeTruthy();

    // Verificar título principal
    expect(getByText("Tus Productos")).toBeTruthy();

    // Verificar mensaje de carrito vacío
    expect(getByText("Tu carrito está vacío")).toBeTruthy();
    expect(getByText("Agrega algunos productos desde nuestra tienda")).toBeTruthy();

    // Verificar icono
    const icon = container.querySelector("i.material-icons");
    expect(icon).toBeTruthy();
    expect(icon.textContent).toBe("remove_shopping_cart");

    // Verificar botón
    const boton = getByRole("link", { name: "Ir a Productos" });
    expect(boton.getAttribute("href")).toBe("productos.html");
  });
});
