import React, { useState } from "react";

import Paper from "../components/paper";
import Header from "../components/header";
import Todoform from "../components/todoform";
import Todos from "../components/todos";

const Todolist = () => {
  const [todos, setTodos] = useState([
    { text: "leaning react" },
    { text: "leaning react hook" },
    { text: "leaning styling in react" }
  ]);

  const addTodo = value => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header />
      <Todoform addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default Todolist;
