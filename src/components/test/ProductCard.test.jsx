import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  const props = {
    image: 'https://example.com/image.jpg',
    title: 'Test Product',
    description: 'A great product',
    buttonText: 'Buy now',
    buttonLink: '/buy'
  };

  it('renders title and description', () => {
    render(<ProductCard {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('renders an image with correct src and alt', () => {
    render(<ProductCard {...props} />);
    const img = screen.getByRole('img', { name: props.title });
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe(props.image);
    expect(img.getAttribute('alt')).toBe(props.title);
  });

  it('renders an action link/button with the correct href and text', () => {
    render(<ProductCard {...props} />);
    const actionElement = screen.getByText(props.buttonText);
    expect(actionElement).toBeInTheDocument();
    // try to extract href either from the element itself or from a wrapping anchor
    const href =
      actionElement.getAttribute('href') ?? actionElement.closest('a')?.getAttribute('href');
    expect(href).toBe(props.buttonLink);
  });

  it('applies the product-card class to the root Card', () => {
    const { container } = render(<ProductCard {...props} />);
    const root = container.querySelector('.product-card');
    expect(root).toBeInTheDocument();
  });
});