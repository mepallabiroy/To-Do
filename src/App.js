import React from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <Form className="Form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add an item to your Todo list</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo..."
        />
      </Form.Group>
      <div style={{ marginTop: 10 }}></div>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="App-header">
          <img
            src={require('./assets/to-do-cartoon.jpg')}
            width="50"
            height="100"
          />
          <h1 style={{ marginLeft: 20 }}>Todo List</h1>{' '}
          <div className="Team">
            <p>Guide: Dr. Preetisudha Meher</p>
            <p>Team Members: </p>
            <ul>Arun Kumar Rajak - ECE/18/14</ul>
            <ul>Manjay Poddar - ECE/18/02</ul>
            <ul>Pallabi Roy - ECE/18/30</ul>
          </div>
        </div>

        <div className="App-content">
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
