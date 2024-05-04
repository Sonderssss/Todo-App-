import React from "react";
import { useState } from "react";

const NewTodoForm = (onSubmit) => {
  //input is declared as newItem and initialized as an empty string
  //setNewItem updates newItem to this new value and rerun the whole component
  const [newItem, setNewItem] = useState("");

  //prevents the page from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    console.log("onSubmit prop:", onSubmit);
    //onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form action="" className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
