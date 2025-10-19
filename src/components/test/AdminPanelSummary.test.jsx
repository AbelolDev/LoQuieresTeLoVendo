import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AdminPanelSummary from "../components/AdminPanelSummary";

// Mock del componente AdminPanelCard para aislar la prueba
vi.mock("../components/AdminPanelCard", () => ({
  default: ({ color, icon, value, label }) => (
    <div data-testid="card">
      <span>{`${label}: ${value}`}</span>
      <i>{icon}</i>
      <p>{color}</p>
    </div>
  ),
}));

describe("Componente AdminPanelSummary", () => {
  it("renderiza correctamente las tarjetas con los datos recibidos por props", () => {
    // Datos simulados (mock)
    const data = {
      productos: 25,
      usuarios: 10,
      reportes: 7,
      alertas: 3,
    };

    // Renderizar el componente
    const { getByText, getAllByTestId } = render(
      <AdminPanelSummary data={data} />
    );

    // Verificar que se renderizaron las 4 tarjetas
    const cards = getAllByTestId("card");
    expect(cards.length).toBe(4);

    // Verificar cada tarjeta según su label
    expect(getByText("Productos: 25")).toBeTruthy();
    expect(getByText("Usuarios: 10")).toBeTruthy();
    expect(getByText("Reportes: 7")).toBeTruthy();
    expect(getByText("Alertas: 3")).toBeTruthy();
  });
});
