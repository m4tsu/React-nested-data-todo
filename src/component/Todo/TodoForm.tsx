import React, { FC, useState, useEffect } from "react";
import LabelSelector from "../Label/LabelSelector";
import { LabelType, TodoType } from "../../store/dataType";
import useTodo from "../../containers/Todo";

interface TodoFormProps {
  labels: LabelType[];
  todo?: TodoType;
  // onClickSave(todoFormValues: TodoFormState): void;
  onClickCancel?: any;
  onDone?: any;
}

export interface TodoFormState {
  text: string;
  label: null | LabelType;
}

const TodoForm: FC<TodoFormProps> = ({
  labels,
  todo,
  onClickCancel,
  onDone
}) => {
  const [formTodo, setFormTodo] = useState<TodoFormState>({
    text: todo ? todo.text : "",
    label: null
  });
  console.log("todo form");
  const { postTodo, updateTodo } = useTodo();
  const saveLabel: string = todo ? "update" : "add";

  useEffect(() => {
    if (todo) {
      setFormTodo({ ...formTodo, label: todo.label });
    }
  }, [todo]);

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormTodo({ ...formTodo, text: event.target.value });
  };
  const clickSaveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (todo) {
      const updatedTodo: TodoType = {
        ...todo,
        text: formTodo.text,
        label: formTodo.label
      };
      updateTodo(updatedTodo);
    } else {
      postTodo(formTodo);
    }
    if (onDone) {
      onDone();
    }
  };
  const clickCancelHaner = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClickCancel();
  };
  const handleChangeLabel = (label_id: null | number) => {
    setFormTodo({ ...formTodo, label: selectedLabel(label_id) });
  };

  const selectedLabel = (label_id: null | number): null | LabelType => {
    if (!label_id) {
      return null;
    }
    const label = labels.find(label => label.id === label_id);
    return label ? label : null;
  };

  return (
    <div>
      <textarea onChange={handleChangeText} value={formTodo.text}></textarea>
      <div>
        <LabelSelector
          labels={labels}
          onChange={handleChangeLabel}
          value={formTodo.label ? formTodo.label.id : null}
        />
        <button onClick={clickSaveHandler}>{saveLabel}</button>
        {todo ? <button onClick={clickCancelHaner}>back</button> : null}
      </div>
    </div>
  );
};

export default TodoForm;
