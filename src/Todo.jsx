// Todo component renders the todo list UI and handles user interactions.
// 'useSeletor' accesses 'items' array and 'useDispatch' hook is used to send the function and its actions.
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeOne, clearTodo } from './features/TodoSlice';

function Todo() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  // 'renderItems' variable maps the 'items' raay and renders todo items list elements.
  const renderItems = items.map((item, index) => (
    <li key={index} onClick={() => dispatch(removeOne(index))}>
      {item}
    </li>
  ));
  
  // 'submitForm' handles form submission, sends the action and clears the input field.
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  
  // the 'useState' hook manages the input value and Onchange.
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>{renderItems}</ul>
      <button onClick={() => dispatch(clearTodo())}>Clear</button>
    </div>
  );
}

export default Todo;
