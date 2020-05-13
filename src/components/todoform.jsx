import React, { useState } from "react";
import propType from "prop-types";

const Todoform = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
     alert("no blank todo!");
     return;
    }

    addTodo(value);
    alert(value);
    setValue("");
  };

  return (
    <section>
      <form className="add">
        <div className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
        </div>
      </form>
    </section>
  );
};

Todoform.propType {
  addTodo: propType.func.isRequired
};

export default Todoform;
