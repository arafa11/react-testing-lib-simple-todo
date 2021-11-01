import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


test('renders Todo Text', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText(/todo/i);
  expect(headingElement).toBeInTheDocument();
}); 

it('renders Todo Text', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText(/todo/i);
  expect(headingElement).toBeInTheDocument();
}); 

