import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin';

// Mock de Materialize CSS
vi.mock('materialize-css', () => ({
  Sidenav: {
    init: vi.fn(),
  },
  toast: vi.fn(),
}));

// Mock de react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  };
});

describe('NavbarAdmin Component', () => {
  const mockNavigate = vi.fn();
  let mockLocation;

  beforeEach(() => {
    vi.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
    
    // Mock de localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        removeItem: vi.fn(),
        getItem: vi.fn(),
        setItem: vi.fn(),
      },
      writable: true,
    });
  });

  const renderWithRouter = (initialEntries = ['/admin_panel']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="*" element={<NavbarAdmin />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('should render navbar with admin title', () => {
    renderWithRouter();

    expect(screen.getByText('Admin')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Admin' })).toHaveAttribute('href', '/admin_panel');
  });

  it('should render navigation links', () => {
    renderWithRouter();

    expect(screen.getByText('Productos')).toBeTruthy();
    expect(screen.getByText('Cerrar sesión')).toBeTruthy();
  });

  it('should highlight active link based on current location', () => {
    mockLocation = { pathname: '/admin_panel/productos' };
    vi.mocked(useLocation).mockReturnValue(mockLocation);

    renderWithRouter(['/admin_panel/productos']);

    const productosLink = screen.getByText('Productos').closest('li');
    expect(productosLink).toHaveClass('active');
  });

  it('should call handleLogout when logout button is clicked', () => {
    renderWithRouter();

    const logoutButton = screen.getByText('Cerrar sesión');
    fireEvent.click(logoutButton);

    expect(window.localStorage.removeItem).toHaveBeenCalledWith('correo');
    expect(window.localStorage.removeItem).toHaveBeenCalledWith('contrasenia');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('should initialize sidenav on component mount', () => {
    const { M } = require('materialize-css');
    
    renderWithRouter();

    expect(M.Sidenav.init).toHaveBeenCalledTimes(1);
    expect(M.Sidenav.init).toHaveBeenCalledWith(expect.any(NodeList));
  });

  it('should show mobile menu trigger', () => {
    renderWithRouter();

    expect(screen.getByText('menu')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'menu' })).toHaveAttribute('data-target', 'mobile-demo');
  });

  it('should render mobile menu items', () => {
    renderWithRouter();

    expect(screen.getByText('Productos').closest('.sidenav')).toBeTruthy();
    expect(screen.getAllByText('Cerrar sesión').length).toBe(2); // Desktop + mobile
  });
});