import React, { FC, useState } from 'react';
import LabelSelector from '../Label/LabelSelector';
import { LabelType, TodoType } from '../../store/dataType';

interface TodoFormProps {
  labels: LabelType[];
  todo?: TodoType;
  onClickCancel?: any;
  onDone?: any;
}

interface TodoFormState {
  text: string;
  label: null | LabelType;
}

const TodoForm: FC<TodoFormProps> = ({labels, todo, onClickCancel, onDone}) => {
  const [formTodo, setFormTodo] = useState<TodoFormState>(
    { text: todo ? todo.text : '', label: null }
  )
  const saveLabel: string = todo ? 'update' : 'add'
  const handleChangeText = ( event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormTodo({ ...formTodo, text: event.target.value })
  }
  const clickSaveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formTodo);
    if(onDone) {
      onDone();
    }
  }
  const clickCancelHaner = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickCancel();
  }
  const handleChangeLabel = (label: null | LabelType) => {
    setFormTodo({...formTodo, label: label})
  }

  return (
    <div>
      <textarea onChange={handleChangeText} value={formTodo.text} ></textarea>
      <div>
        <LabelSelector labels={labels} onChange={handleChangeLabel} value={formTodo.label ? formTodo.label.id : null}/>
        <button onClick={ clickSaveHandler }>{saveLabel}</button>
        {
          todo ? <button onClick={clickCancelHaner}>back</button> : null
        }
      </div>
      {formTodo.text}
    </div>
  )
};

export default TodoForm;