import React, { FC } from 'react';
import Todo from './Todo';
import { TodoType } from '../../store/dataType';

interface TodosProps {
  todos: TodoType[];
}

const TodoList: FC<TodosProps> = ({todos}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}><Todo todo={todo}/></li>
      })}
    </ul>
  )
};

export default TodoList;