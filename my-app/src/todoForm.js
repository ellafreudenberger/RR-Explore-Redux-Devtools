import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function TodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText)); 
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new to-do..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoForm;
