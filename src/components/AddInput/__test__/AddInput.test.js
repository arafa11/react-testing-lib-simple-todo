import { screen, render, fireEvent } from '@testing-library/react';
import AddInput from '..';

const mockedSetTodos = jest.fn();

it("should render input element", () => {
  // render(<AddInput todos={[]} setTodos={() => {}} />);
  render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
  const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
  const btnEl = screen.getByRole("button", { name: /add/i });
  expect(inputEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveClass("disable");
});

it("should be able to type in input", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
  const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
  const btnEl = screen.getByRole("button", { name: /add/i });
  fireEvent.change(inputEl, { target: { value: "Go Grocery Shopping" } })
  expect(inputEl.value).toBe("Go Grocery Shopping");
  expect(btnEl).not.toHaveClass("disable");
});

it("should have empty input on click button", () => {
  render(<AddInput todos={[]} setTodos={mockedSetTodos} />);
  const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
  const btnEl = screen.getByRole("button", { name: /add/i });
  fireEvent.click(btnEl);
  expect(inputEl.value).toBe("");
  expect(btnEl).toHaveClass("disable");
});

