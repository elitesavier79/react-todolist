import React from "react";
import "./styles.css";

import Paper from "./components/paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button className="header-btn main-black-color">Add</button>
        <h1 className="header-title">Todo Lits</h1>
        <button className="header-btn main-red-color ">Clear</button>
      </section>

      <section>
        <form className="add">
          <div className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn main-black-color">Add</button>
          </div>
        </form>
      </section>

      <section className="todos">
        <div className="todo">
          <span className="todo-text">learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">learning React</span>
        </div>
        <div className="todo">
          <span className="todo-text">learning React</span>
        </div>
      </section>
    </Paper>
  );
}
