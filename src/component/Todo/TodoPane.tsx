import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import LabelSelector from '../Label/LabelSelector';
import useTodo from '../../containers/Todo';
import useLabel from '../../containers/Label';
// import { labels } from '../../store/sample';

const TodoPane: React.FC = () => {
  const { todoState, fetchTodos, changeFilterLabelId } = useTodo();
  const { todos, filterLabelId } = todoState;
  const { labelState } = useLabel();
  const { labels } = labelState;
  console.log('todo Pane')
  return (
    <div>
      <h2>Todo with Filter</h2>
      <TodoForm labels={labels}/>
      <section>
        <span>Filter</span>
        <LabelSelector
          labels={labels}
          onChange={changeFilterLabelId}
          value={filterLabelId}
        />
      </section>
      <hr/>
      <TodoList todos={todos} labels={labels}/>
    </div>
  )
};

export default TodoPane;