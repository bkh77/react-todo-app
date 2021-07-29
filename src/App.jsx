import React, { useState } from "react";
import Tasks from "./components/Tasks.jsx";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "task1", tempalate: false },
    { id: 2, title: "task2", tempalate: false },
    { id: 3, title: "task3", tempalate: false },
  ]);

  const [text, setText] = useState("");
  const [editor, setEditor] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (editor) {
      tasks.forEach((item) => {
        if (item.id === editor.id) {
          item.title = text;
        }
      });
      setTasks([...tasks]);
      setText("");
      setEditor("");
    } else {
      if (text) {
        tasks.push({
          id: tasks.length + 1,
          title: text,
          tempalate: false,
        });
        setTasks([...tasks]);
        setText("");
      }
    }
  }

  function remove(id) {
    const filtered = tasks.filter((i) => i.id !== id);
    setTasks(filtered);
  }

  function editTask(item) {
    setEditor(item);
    setText(item.title);
  }

  return (
    <div className="wrapper">
      <div className={editor ? "card changeEdit" : "card"}>
        <h4>Todo app {tasks.length > 0 ? <sup>{tasks.length} </sup> : ""}</h4>
        <form onSubmit={addTask}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="add task..."
          />
          <button type="submit">{editor ? "Edit" : "Add"}</button>
        </form>

        <Tasks editTask={editTask} remove={remove} tasks={tasks} />
      </div>
    </div>
  );
}
