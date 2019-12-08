import { Reducer, Action } from 'redux';
import { Actions, LabelActionType } from './actions';
import { TodoType, LabelType } from '../dataType';
import { todos, labels } from '../sample';

export interface State {
  labels: LabelType[]
};

const initialState: State = { labels: labels };

const LabelReducer: Reducer<State, Actions> = ( state = initialState, action) => {
  switch (action.type) {
    case LabelActionType.READ_LABEL:
      return { ...state, labels: action.payload.labels};
    default:
      return state;
  }
};

export default LabelReducer;