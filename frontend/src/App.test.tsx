import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the Home link', () => {
  render(<App />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render the Home link', () => {
  render(<App />);
  // expect(screen.getAllByText('Home')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
});

it('should render the Home header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
});
