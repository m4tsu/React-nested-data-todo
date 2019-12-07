import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { TodoType, LabelType } from '../../store/dataType';

interface TodosProps {
  todos: TodoType[];
  labels: LabelType[]
}

const TodoList: FC<TodosProps> = ({ todos, labels }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}><TodoItem todo={todo} labels={labels}/></li>
      })}
    </ul>
  )
};

export default TodoList;