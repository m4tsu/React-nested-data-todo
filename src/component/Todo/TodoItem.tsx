import React, { FC, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import { TodoType, LabelType } from '../../store/dataType';
import useTodo from '../../containers/Todo';

interface TodoItemProps {
  labels: LabelType[];
  todo: TodoType;
}

interface TodoItemState {
  edit: boolean
}

const TodoItem: FC<TodoItemProps> = ({ labels, todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const toggleEditMode = () => {
    setEdit(!edit);
  }

  return (
    edit ? <TodoForm labels={labels} todo={todo} onDone={toggleEditMode} onClickCancel={toggleEditMode}/>
    : <Todo todo={todo} onClickEdit={toggleEditMode}/>
  )
}

export default TodoItem;