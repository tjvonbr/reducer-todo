import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className="project-title">Reducer To-Do App</h1>
      <TodoForm />
    </div>
  );
}

export default App;
