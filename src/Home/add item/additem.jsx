import React, { useState } from "react";
import "./additem.css";
// import List from '../List/List';
const Additem = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditID(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditID(id);
  };
  return (
    <div>
      <div className="Header">
        <div className="Heading">
          <h2>To Do List</h2>
        </div>
        <div className="Input-container">
          <form className="List-form" onSubmit={handleSubmit}>
            <input
              className="Input-field"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              id="Input-Text"
              placeholder="Add Items"
            />
            <button className="Btn" type="submit" id="addToList">
              {editId ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
      <ul className="List-container">
        {/* {console.log("HEllo")} */}
        {todos.map((t) => {
          return (
            <li id="Object-List">
              <span className="Object-text" key={t.id}>
                {t.todo}
              </span>
              <button
                onClick={() => handleEdit(t.id)}
                className="Btn"
                id="Edit-Id"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(t.id)}
                className="Btn"
                id="Delete-Id"
              >
                Delete
              </button>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Additem;
