import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import TablaProductos from "../components/TablaProductos";

// 🔹 Mock global de MaterializeCSS
global.M = {
  Tooltip: {
    init: vi.fn(),
  },
};

describe("Componente TablaProductos", () => {
  const mockProductos = [
    { id: 1, nombre: "Teclado", precio: 25000 },
    { id: 2, nombre: "Mouse", precio: 15000 },
  ];

  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza correctamente los productos en la tabla", () => {
    const { getByText } = render(
      <MemoryRouter>
        <TablaProductos
          productos={mockProductos}
          onEdit={mockOnEdit}
          onDelete={mockOnDelete}
        />
      </MemoryRouter>
    );

    // Verificar texto de productos
    expect(getByText("Teclado")).toBeTruthy();
    expect(getByText("Mouse")).toBeTruthy();

    // Verificar precios
    expect(getByText("$25000")).toBeTruthy();
    expect(getByText("$15000")).toBeTruthy();
  });

  it("llama correctamente a las funciones onEdit y onDelete al hacer clic", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <TablaProductos
          productos={mockProductos}
          onEdit={mockOnEdit}
          onDelete={mockOnDelete}
        />
      </MemoryRouter>
    );

    const buttons = getAllByRole("button");

    // Primer botón (editar) del primer producto
    fireEvent.click(buttons[0]);
    expect(mockOnEdit).toHaveBeenCalledWith(1);

    // Segundo botón (eliminar) del primer producto
    fireEvent.click(buttons[1]);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it("renderiza el botón de agregar producto cuando se pasa addLink", () => {
    const { getByRole, getByLabelText } = render(
      <MemoryRouter>
        <TablaProductos
          productos={mockProductos}
          onEdit={mockOnEdit}
          onDelete={mockOnDelete}
          addLink="/agregar"
        />
      </MemoryRouter>
    );

    // Verifica el enlace flotante "Agregar producto"
    const addButton = getByRole("link");
    expect(addButton.getAttribute("href")).toBe("/agregar");

    // Verifica el icono de agregar
    expect(getByLabelText ? getByLabelText("Agregar producto") : addButton).toBeTruthy();
  });

  it("inicializa correctamente los tooltips al montar el componente", () => {
    render(
      <MemoryRouter>
        <TablaProductos
          productos={mockProductos}
          onEdit={mockOnEdit}
          onDelete={mockOnDelete}
        />
      </MemoryRouter>
    );

    expect(M.Tooltip.init).toHaveBeenCalled();
  });
});
