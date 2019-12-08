import { Reducer, Action } from 'redux';
import { Actions, TodoActionType } from './actions';
import { TodoType } from '../dataType';
import { todos } from '../sample';

export interface State {
  todos: TodoType[];
  filterLabelId: null | number;
};

const initialState: State = {todos, filterLabelId: null};

const TodoReducer: Reducer<State, Actions> = (state = initialState, action): State => {
  switch (action.type) {
    case TodoActionType.READ_TODO:
      return { ...state, todos: action.payload.todos };
    case TodoActionType.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.todo] };
    case TodoActionType.REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload.id)};
    case TodoActionType.UPDATE_TODO:
      return (
        { ...state,
          todos: state.todos.map((todo)=> {
            if (todo.id === action.payload.todo.id){
              return action.payload.todo;
            }
            return todo;
          })}
      )
    case TodoActionType.FILTER_TODO:
      return { ...state, filterLabelId: action.payload.filterLabelId };
    default:
      return state;
  }
}

export default TodoReducer;