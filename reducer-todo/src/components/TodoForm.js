import React, { useState, useReducer } from 'react';
import TodoItem from './TodoItem';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = () => {
  const [newItem, setNewItem] = useState('');
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChanges = event => {
    setNewItem(event.target.value);
  };

  const addItem = event => {
    event.preventDefault();
    dispatch({ type: 'TOGGLE_ADD', payload: newItem });
    setNewItem('');
  }

  return (
    <div className="form-wrapper">
      <input className='form-input' 
        placeholder='Please enter your task!'
        type='text'
        value={ newItem }
        name='value'
        onChange={ handleChanges }
      />
      <div className="button-wrapper">
        <button className='btn submit-btn'
                type='submit'
                onClick={ addItem }>
                  Add Task
        </button>
      </div>
      {state.todos.map(item => (
        <TodoItem state={ item }/>
      ))}
    </div>  
  )
}

export default TodoForm;