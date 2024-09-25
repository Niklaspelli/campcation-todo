"use client";
import styles from "../styles/Todo.module.css";
import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([newItem, ...items]);
      setNewItem("");
    }
  };

  const deleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Lägg till.."
        />
        <button className={styles.button} onClick={addItem}>
          Lägg till
        </button>

        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
              <button
                className={styles.deleteButton}
                onClick={() => deleteItem(index)}
              >
                Radera
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
