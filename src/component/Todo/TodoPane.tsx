import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import LabelSelector from '../Label/LabelSelector';
import { todos, labels } from '../../store/sample';

const TodoPane: React.FC = () => {
  return (
    <div>
      <h2>Todo with Filter</h2>
      <TodoForm labels={labels}/>
      <section>
        {/* <LabelSelector
          labels={labels}
          onChange={}
          value={}
        /> */}
        <TodoList todos={todos} labels={labels}/>

      </section>
      <hr/>
    </div>
  )
};

export default TodoPane;