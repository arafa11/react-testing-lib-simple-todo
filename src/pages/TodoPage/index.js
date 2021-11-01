import React from 'react';
import { Container } from "react-bootstrap";
import Header from '../../components/Header'
import Todo from "../../components/Todo";

export default function TodoPage() {
  return (
    <div>
      <Container>
        <Todo />
      </Container>
    </div>
  )
}