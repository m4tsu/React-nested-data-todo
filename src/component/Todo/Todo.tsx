import React, { FC } from 'react';
import { TodoType } from '../../store/dataType';

import Label from '../Label/Label';

export interface TodoProps {
  todo: TodoType;
  onClickEdit?: any;
}

const Todo: FC<TodoProps> = ({ todo, onClickEdit}) => {
  return(
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={todo.completed}/>
        <div>{todo.text}</div>
      </label>
      <section>
        <button onClick={onClickEdit}>edit</button>
        <button>x</button>
      </section>
      <section>
        {todo.label ? <Label label={todo.label} editable={false}/> : null}
      </section>
    </div>
  )
};

export default Todo;