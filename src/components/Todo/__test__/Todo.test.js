import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '..';

const MockedTodo = () => {
  return(
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTodo = (todos) => {
  const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
  const btnEl = screen.getByRole("button", { name: /add/i });
  todos.forEach(todo => {
    fireEvent.change(inputEl,{ target: { value: todo } });
    fireEvent.click(btnEl);
  });
}

// integration test
it("Todo exist in the list after adding it", () => {
  render(<MockedTodo />);
  const inputEl = screen.getByPlaceholderText(/add a new task here.../i);
  const btnEl = screen.getByRole("button", { name: /add/i });
  fireEvent.change(inputEl,{ target: { value: "Go Grocery Shopping" } });
  fireEvent.click(btnEl);
  const divEl = screen.getByText(/Go Grocery Shopping/i);
  expect(divEl).toBeInTheDocument();
});

it("should render multiple items", () => {
  render(<MockedTodo />);
  addTodo(['Go Grocery Shopping', 'Pet the Cat', 'Do Homework']);
  const divEl = screen.getAllByTestId("todo-item");
  expect(divEl.length).toBe(3);
});

it("task should not have completed class when initially rendered", () => {
  render(<MockedTodo />);
  addTodo(['Go Grocery Shopping']);
  const divEl = screen.getByText(/Go Grocery Shopping/i);
  expect(divEl).not.toHaveClass('todo-item-active');
});

it("task should have completed class when clicked", () => {
  render(<MockedTodo />);
  addTodo(['Go Grocery Shopping']);
  const divEl = screen.getByText(/Go Grocery Shopping/i);
  fireEvent.click(divEl);
  expect(divEl).toHaveClass('todo-item-active');
});
