import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AdminCard from "../components/AdminCard";

describe("Componente AdminCard", () => {
    it("renderiza correctamente todos los elementos según las props", () => {
        // Datos simulados (mock)
        const props = {
            icon: "settings",
            iconColor: "blue-text",
            title: "Panel",
            description: "Accede a la configuración del sistema",
            buttonColor: "blue",
            linkTo: "/admin/panel",
        };

        // Renderizamos el componente
        const { getByText, getByRole, container } = render(
            <MemoryRouter>
                <AdminCard {...props} />
            </MemoryRouter>
        );

        // Pruebas de renderizado
        expect(getByText("Panel")).toBeTruthy();
        expect(getByText("Accede a la configuración del sistema")).toBeTruthy();
        expect(getByText("Ir a panel")).toBeTruthy();

        // Verifica el enlace correcto
        const link = getByRole("link", { name: "Ir a panel" });
        expect(link.getAttribute("href")).toBe("/admin/panel");

        // Verifica que el ícono se haya renderizado con su clase
        const iconElement = container.querySelector("i.material-icons");
        expect(iconElement).toBeTruthy();
        expect(iconElement.classList.contains("blue-text")).toBe(true);
        expect(iconElement.textContent).toBe("settings");
    });

    it("aplica clases al botón y convierte el título a minúsculas en el texto del enlace", () => {
        const props = {
            icon: "person",
            iconColor: "red-text",
            title: "Usuarios",
            description: "Gestiona los usuarios del sistema",
            buttonColor: "red",
            linkTo: "/admin/users",
        };

        const { getByRole, container, getByText } = render(
            <MemoryRouter>
                <AdminCard {...props} />
            </MemoryRouter>
        );

        // El título y descripción deben estar presentes
        expect(getByText("Usuarios")).toBeTruthy();
        expect(getByText("Gestiona los usuarios del sistema")).toBeTruthy();

        // El texto del enlace debe usar title.toLowerCase()
        const link = getByRole("link", { name: "Ir a usuarios" });
        expect(link).toBeTruthy();
        expect(link.getAttribute("href")).toBe("/admin/users");

        // El enlace debe tener las clases btn y el color del botón
        expect(link.classList.contains("btn")).toBe(true);
        expect(link.classList.contains("red")).toBe(true);

        // Verifica que el ícono tenga la clase de color y la clase large
        const iconElement = container.querySelector("i.material-icons");
        expect(iconElement.classList.contains("red-text")).toBe(true);
        expect(iconElement.classList.contains("large")).toBe(true);

        // Verifica estructura de clases externas
        expect(container.querySelector(".col.s12.m6")).toBeTruthy();
        expect(container.querySelector(".card")).toBeTruthy();
    });
});
