import { ADD_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload.text }];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};

export default todoReducer;
