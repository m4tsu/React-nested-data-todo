import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import TodoReducer, { State as TodoState } from './Todo/reducers';

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
}

const store = createStore(
  combineReducers<AppState>({
    todoState: TodoReducer
  }),
  enhancer
);

export default store;