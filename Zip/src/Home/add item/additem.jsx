import React, { useState } from "react";
import "./additem.css";
// import List from '../List/List';
const Additem = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos({ id: `${todo}-${Date.now()}`, todo }, ...todos);
    }
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
              onChange={(e) => setTodo(e.target.value)}
              type="text"
              id="Input-Text"
              placeholder="Add Items"
            />
            <button className="Btn" type="submit" id="addToList">
              Add
            </button>
          </form>
        </div>
      </div>
      <ul className="List-container">
        {/* {console.log("HEllo")} */}
        {todos.map((t) => {
            {console.log("HEllo3")}
        //   return (
        //     <li id="Object-List">
        //       <span className="Object-text"></span>
        //       <button className="Btn" id="Edit-Id">
        //         Edit
        //       </button>
        //       <button className="Btn" id="Delete-Id">
        //         Delete
        //       </button>
        //       <br />
        //     </li>
        //   );
        })}
      </ul>
    </div>
  );
};

export default Additem;
