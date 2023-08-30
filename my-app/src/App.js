import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoForm from './todoForm';
import TodoList from './todoList'; 

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App

