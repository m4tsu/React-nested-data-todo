import { TodoType, LabelType } from '../dataType';

export const TodoActionType = {
  READ_TODO: 'READ_TODO' as const,
  ADD_TODO: 'ADD_TODO' as const,
  UPDATE_TODO: 'UPDATE' as const,
  REMOVE_TODO: 'REMOVE_TODO' as const,
  TOGGLE_TODO: 'TOGGLE_TODO' as const,
  FILTER_TODO: 'FILTER_TODO' as const
}

// export enum TodoActionType {
//   READ_TODO = 'READ_TODO',
//   ADD_TODO = 'ADD_TODO',
//   UPDATE_TODO = 'UPDATE',
//   REMOVE_TODO = 'REMOVE_TODO',
//   TOGGLE_TODO = 'TOGGLE_TODO',
//   FILTER_TODO = 'FILTER_TODO'
// }

// const READ_TODO = 'READ_TODO' as const;
// const ADD_TODO = 'ADD_TODO' as const;
// const UPDATE_TODO = 'UPDATE' as const;
// const REMOVE_TODO = 'REMOVE_TODO' as const;
// const TOGGLE_TODO = 'TOGGLE_TODO'  as const;
// const FILTER_TODO = 'FILTER_TODO' as const;

export const readTodo = (todos: TodoType[]) => ({
  // type: READ_TODO,
  type: TodoActionType.READ_TODO,
  payload: {
    todos
  }
});
export const addTodo = (todo: TodoType) => ({
  // type: ADD_TODO,
  type: TodoActionType.ADD_TODO,
  payload: {
    todo
  }
});
export const updateTodo = (todo: TodoType) => ({
  // type: UPDATE_TODO,
  type: TodoActionType.UPDATE_TODO,
  payload: {
    todo
  }
});
export const removeTodo = (id: number) => ({
  // type: REMOVE_TODO,
  type: TodoActionType.REMOVE_TODO,
  payload: {
    id
  }
});
export const toggleTodo = (todo: TodoType) => ({
  // type: TOGGLE_TODO,
  type: TodoActionType.TOGGLE_TODO,
  payload: {
    todo
  }
});
export const filterTodo = (label: LabelType) => ({
  // type: FILTER_TODO,
  type: TodoActionType.FILTER_TODO,
  payload: {
    filterLabelId: label && label.id
  }
});

export type Actions = (
  | ReturnType<typeof readTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof filterTodo>
);