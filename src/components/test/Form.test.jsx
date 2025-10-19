import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Form from "../components/Form";

// 🔹 Mock de useNavigate de react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

//Mock global de MaterializeCSS
global.M = {
  toast: vi.fn(),
};

describe("Componente Form", () => {
  let navigateMock;

  beforeEach(() => {
    vi.clearAllMocks();
    navigateMock = vi.fn();
  });

  it("muestra un toast de error si los campos están vacíos", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    const boton = getByText("Enviar");
    fireEvent.click(boton);

    // Verifica que se haya llamado al toast de error
    expect(M.toast).toHaveBeenCalledWith({
      html: "Por favor completa todos los campos",
      classes: "red",
    });
  });

  it("guarda los datos en localStorage y redirige al panel admin al enviar correctamente", () => {
    // Mocks de localStorage
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );

    // Completar campos
    const inputCorreo = getByLabelText("Ingrese su correo:");
    const inputContrasenia = getByLabelText("Ingrese su contraseña:");
    const boton = getByText("Enviar");

    fireEvent.change(inputCorreo, { target: { value: "test@mail.com", name: "correo" } });
    fireEvent.change(inputContrasenia, { target: { value: "password123", name: "contrasenia" } });
    fireEvent.click(boton);

    // Verifica almacenamiento local
    expect(setItemSpy).toHaveBeenCalledWith("correo", "test@mail.com");
    expect(setItemSpy).toHaveBeenCalledWith("contrasenia", "password123");

    // Verifica toast de éxito
    expect(M.toast).toHaveBeenCalledWith({
      html: "Sesión iniciada correctamente",
      classes: "green",
    });
  });
});
