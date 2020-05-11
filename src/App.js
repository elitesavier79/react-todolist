import React from "react";
import "./styles.css";

import Paper from "./components/paper";
import Header from "./components/header";
import Todoform from "./components/todoform";
import Todo from "./components/todo";

export default function App() {
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todo />
    </Paper>
  );
}
