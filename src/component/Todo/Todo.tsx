import React, { FC } from 'react';
import { TodoType } from '../../store/dataType';

export interface TodoProps {
  todo: TodoType;
}

const Todo: FC<TodoProps> = (props) => {
  const { todo } = props
  return(
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={todo.completed}/>
        <div>{todo.text}</div>
      </label>
      <section>
        <button>edit</button>
        <button>x</button>
      </section>
      <section>
        {todo.label ? <label>{todo.label.text}</label> : ''}
      </section>
    </div>
  )
};

export default Todo;