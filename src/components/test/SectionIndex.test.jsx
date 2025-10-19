import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SectionIndex from '../SectionIndex';

describe('SectionIndex component', () => {

  test('renders the about section with correct text content', () => {
    render(<SectionIndex />);
    
    expect(screen.getByText(/Nuestra empresa se dedica a la compra y venta de productos/i)).toBeTruthy();
    expect(screen.getByText(/Nos preocupa en gran medida el ofrecerle a nuestros clientes/i)).toBeTruthy();
    expect(screen.getByText(/Llevamos más de 5 años en el mercado/i)).toBeTruthy();
  });

  test('has correct CSS classes', () => {
    const { container } = render(<SectionIndex />);
    
    expect(container.querySelector('.row.about-row')).toBeTruthy();
    expect(container.querySelector('.col.s12.m6.about-text')).toBeTruthy();
  });

  test('renders exactly 3 paragraphs', () => {
    const { container } = render(<SectionIndex />);
    const paragraphs = container.getElementsByTagName('p');
    
    expect(paragraphs.length).toBe(3);
  });

});