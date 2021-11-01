import { render, screen } from '@testing-library/react';
import Header from '..';

it('renders header title prop correctly', () => {
  render(<Header title="Header Title" />);
  const headingEl = screen.getByText(/header title/i);
  expect(headingEl).toBeInTheDocument();
});

it('renders header title prop correctly', () => {
  render(<Header title="Header Title" />);
  // const headingEl = screen.getByRole("heading",{ name: /header title/i }); // if title Attr does not exists.
  const headingEl = screen.getByRole("heading",{ name: /headerTitle/i }); // if title Attr exists.
  expect(headingEl).toBeInTheDocument();
});

it('renders header title prop correctly', () => {
  render(<Header title="Header Title" />);
  const headingEl = screen.getByTitle("headerTitle")
  expect(headingEl).toBeInTheDocument(); 
});

it('renders header title prop correctly', () => {
  render(<Header title="Header Title" />);
  const headingEl = screen.getByTestId("header-1")
  expect(headingEl).toBeInTheDocument(); 
});

it('renders header title prop correctly', async () => {
  render(<Header title="Header Title" />);
  const headingEl = await screen.findByText(/header title/i);
  expect(headingEl).toBeInTheDocument();
});

it('renders header title prop correctly', () => {
  render(<Header title="Header Title" />);
  // const headingEl = screen.getByText(/dogs/i); // will fail here
  const headingEl = screen.queryByText(/dogs/i); // won't (null)
  expect(headingEl).not.toBeInTheDocument();
});

it('renders header title prop correctly', async () => {
  render(<Header title="Header Title" />);
  const headingEls = await screen.findAllByRole("heading");
  // console.log(headingEl);
  expect(headingEls.length).toBe(1);
});
