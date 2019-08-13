import React from 'react';

const TodoItem = props => {
  return (
    <p className="todo-item">{ props.state.item}</p>
  )
};

export default TodoItem;