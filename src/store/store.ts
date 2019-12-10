import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import TodoReducer, { State as TodoState } from './Todo/reducers';
import LabelReducer, { State as LabelState } from './Label/reducers';
import { LabeledStatement } from '@babel/types';

// for Redux dev tools
const composeEnhancers =
process.env.NODE_ENV === 'development' &&
typeof window === 'object' &&
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
: compose;

const enhancer = composeEnhancers(applyMiddleware())

export type AppState = {
  todoState: TodoState;
  labelState: LabelState;
}

const store = createStore(
  combineReducers<AppState>({
    todoState: TodoReducer,
    labelState: LabelReducer,
  }),
  enhancer
);

export default store;