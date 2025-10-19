import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DashboardCard from "../components/DashboardCard";

describe("📊 Componente DashboardCard", () => {
  it("renderiza correctamente las props recibidas", () => {
    // Datos simulados (mock)
    const props = {
      color: "teal",
      icon: "analytics",
      value: "150",
      label: "Usuarios activos",
    };

    // Renderizamos el componente
    const { getByText, container } = render(<DashboardCard {...props} />);

    // Verifica renderizado del icono
    const iconElement = container.querySelector("i.material-icons");
    expect(iconElement).toBeTruthy();
    expect(iconElement.textContent).toBe("analytics");

    // Verifica valor y label renderizados
    expect(getByText("150")).toBeTruthy();
    expect(getByText("Usuarios activos")).toBeTruthy();

    // Verifica color de la tarjeta (clase aplicada)
    const cardPanel = container.querySelector(".card-panel");
    expect(cardPanel.classList.contains("teal")).toBe(true);
  });
});
