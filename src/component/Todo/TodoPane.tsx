import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import LabelSelector from "../Label/LabelSelector";
import useTodo from "../../containers/Todo";
import useLabel from "../../containers/Label";

const TodoPane: React.FC = () => {
  const { todoState, changeFilterLabelId } = useTodo();
  const { todos, filterLabelId } = todoState;
  const { labelState } = useLabel();
  const { labels } = labelState;
  console.log("todo Pane");

  const filterdTodos = todos.filter(todo => {
    if (filterLabelId === null) {
      return true;
    } else {
      return todo.label ? todo.label.id === filterLabelId : false;
    }
  });

  return (
    <div>
      <h2>Todo with Filter</h2>
      <TodoForm labels={labels} />
      <section>
        <span>Filter</span>
        <LabelSelector
          labels={labels}
          onChange={changeFilterLabelId}
          value={filterLabelId}
        />
      </section>
      <hr />
      <TodoList todos={filterdTodos} labels={labels} />
    </div>
  );
};

export default TodoPane;
