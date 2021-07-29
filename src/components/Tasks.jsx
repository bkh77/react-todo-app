import React from "react";
import pencil from "../icons/pencil-fill.svg";
import trash from "../icons/trash-fill.svg";

export default function Tasks({ tasks, remove, editTask }) {
  return (
    <ul className="tasks-card">
      {tasks.map((item) => (
        <li key={item.id}>
          <span>
            <input type="checkbox" />
            <em>
              {item.id}. {item.title}
            </em>
          </span>

          <span>
            <button onClick={() => editTask(item)}>
              <img src={pencil} alt="pencil" />
            </button>
            <button onClick={() => remove(item.id)}>
              <img src={trash} alt="trash" />
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
