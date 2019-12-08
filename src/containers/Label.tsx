import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TodoActionType } from '../store/Todo/actions';
import { AppState } from '../store/store';
import { TodoType, LabelType } from '../store/dataType';

const useLabel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const labelState = useSelector((state: AppState) => state.labelState);
  const dispatch = useDispatch();
  console.log('useTodo')

  return {labelState};
}

export default useLabel;