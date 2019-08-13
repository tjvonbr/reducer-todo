export const initialState = {
  todos: [
    {
      item: '',
      completed: false,
      id: null
    },
  ],

  value: ''
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD':
      return {
        ...state, todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};