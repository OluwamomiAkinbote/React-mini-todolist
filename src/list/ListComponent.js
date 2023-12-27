import React, { useState } from "react";

function ListComponent() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // event handlers to additem
  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = inputValue;
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  // event handlers to remove

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <div>
      <label htmlFor="">
        <h3>Add item</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={addItem}>Add item</button>

      <h3>Items:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
