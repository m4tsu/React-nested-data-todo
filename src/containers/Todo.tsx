import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TodoActionType } from '../store/Todo/actions';
import { AppState } from '../store/store';
import { TodoType, LabelType } from '../store/dataType';
import TodoForm, { TodoFormState } from '../component/Todo/TodoForm';

const useTodo = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const todoState = useSelector((state: AppState) => state.todoState);
  const dispatch = useDispatch();
  console.log('useTodo')

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    dispatch({type: TodoActionType.READ_TODO});
    setLoading(false);
  }, []);

  const postTodo = useCallback((todoFormValues: TodoFormState) => {
    dispatch({ type: TodoActionType.ADD_TODO, payload: { text: todoFormValues.text, label: todoFormValues.label } });
  }, []);

  const updateTodo = useCallback((TodoFormValues: TodoType) => {
    dispatch({ type: TodoActionType.UPDATE_TODO, payload: { todo: TodoFormValues }});
  }, []);

  const changeFilterLabelId = useCallback((filterLabelId: null| number) => {
    dispatch({
      type: TodoActionType.FILTER_TODO,
      payload: { filterLabelId: filterLabelId }
    });
  }, []);

  return { todoState, postTodo, updateTodo, changeFilterLabelId };
}

export default useTodo;