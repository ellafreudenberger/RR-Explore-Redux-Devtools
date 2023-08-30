import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, clearTodos } from './todoSlice';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearTodos}>Clear All</button>
    </div>
  );
}

export default TodoList;


