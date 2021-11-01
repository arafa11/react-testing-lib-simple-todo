import React, { useState } from 'react';
import AddInput from '../AddInput';
import Header from '../Header';
import TodoList from '../TodoList';
import "./Todo.css"

function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo">
        <Header title="Todo" />
        <AddInput setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Todo;
