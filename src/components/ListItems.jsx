import React, { useState, useEffect } from "react";
import styles from "./ListItems.css";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []);

  return (
    <div className="container">
      <h1>HW_8</h1>
      <h2>Список элементов</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите сообщение"
      />
      <button onClick={addItem}>ОТПРАВИТЬ</button>
      <ul className="container_ul">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
