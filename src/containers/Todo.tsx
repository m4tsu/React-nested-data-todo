import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TodoActionType } from '../store/Todo/actions';
import { AppState } from '../store/store';
import { TodoType, LabelType } from '../store/dataType';

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

  const changeFilterLabelId = useCallback((filterLabel: null| LabelType) => {
    dispatch({
      type: TodoActionType.FILTER_TODO,
      payload: { filterLabelId: filterLabel }});
  }, []);

  return { todoState, fetchTodos, changeFilterLabelId };
}

export default useTodo;