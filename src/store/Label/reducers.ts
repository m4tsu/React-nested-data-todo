import { Reducer, Action } from "redux";
import { Actions, LabelActionType } from "./actions";
import { TodoType, LabelType } from "../dataType";
import { todos, labels } from "../sample";

export interface State {
  labels: LabelType[];
}

const initialState: State = { labels: labels };

const LabelReducer: Reducer<State, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case LabelActionType.READ_LABEL:
      return { ...state, labels: action.payload.labels };
    case LabelActionType.ADD_LABEL:
      const nextId: number =
        Math.max(...state.labels.map(label => label.id)) + 1;
      const newLabel: LabelType = { id: nextId, text: action.payload.text };
      return { ...state, labels: [...state.labels, newLabel] };
    default:
      return state;
  }
};

export default LabelReducer;
