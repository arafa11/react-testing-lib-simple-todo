import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '..';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe("TodoFooter: multiple tasks", () => {
  beforeEach(()=> {
    console.log('Running before each test 1');
  })
  it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphEl = screen.getByText(/5 tasks left/i);
    expect(paragraphEl).toBeInTheDocument();
  });
});

describe("TodoFooter: One Task",() => {
  beforeEach(()=> {
    console.log('Running before each test 2');
  })
  afterEach(()=> {
    console.log('Running after each test 2');
  })
  beforeAll(()=> {
    console.log('Running before All tests 2');
  })
  afterAll(()=> {
    console.log('Running after All tests 2');
  })
  it('should render "task"when number of incomplete tasks = 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByText(/1 task left/i);
    expect(paragraphEl).toBeInTheDocument();
    expect(paragraphEl).toBeTruthy();
    expect(paragraphEl).not.toBeFalsy();
  });
  it('should render "task"when number of incomplete tasks = 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByText(/1 task left/i);
    expect(paragraphEl).toBeVisible(); // opacity: 0 will fail
  });
  it('should render "task"when number of incomplete tasks = 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphEl = screen.getByText(/1 task left/i);
    expect(paragraphEl).toContainHTML("p");
  });
  describe("TodoFooter: HTML", () => {
    it('should render "task"when number of incomplete tasks = 1', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphEl = screen.getByTestId("task-left");
      expect(paragraphEl).toHaveTextContent("1 task left");
    });
  })
});

it('should render "task"when number of incomplete tasks = 1', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphEl = screen.getByTestId("task-left");
  expect(paragraphEl.textContent).toBe("1 task left");
});

