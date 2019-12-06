import React, { FC, useState } from 'react';
import LabelSelector from '../Label/LabelSelector';
import { LabelType, TodoType } from '../../store/dataType';

interface TodoFormProps {
  labels: LabelType[]
}

interface TodoFormState {
  text: string;
  label: null | LabelType;
}

const TodoForm: FC<TodoFormProps> = ({labels}) => {
  const [todo, setTodo] = useState<TodoFormState>({ text: '', label: null })
  console.log(todo)
  const handleChangeText = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodo({ ...todo, text: event.target.value })
  }
  const clickSaveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(todo);
  }
  const handleChangeLabel = (label: null | LabelType) => {
    setTodo({...todo, label: label})
  }

  return (
    <div>
      <textarea onChange={handleChangeText} value={todo.text} ></textarea>
      <div>
        <LabelSelector labels={labels} onChange={handleChangeLabel} value={todo.label}/>
        <button onClick={ clickSaveHandler }>Save</button>
      </div>
      { todo.text }
    </div>
  )
};

export default TodoForm;