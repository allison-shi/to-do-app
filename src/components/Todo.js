import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const importantHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            important: !item.important,
          };
        }
        return item;
      })
    );
  };
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li
        className={`todo-item ${todo.completed ? "completed" : ""} ${
          todo.important ? "important" : ""
        }`}
      >
        {text}
      </li>
      <button onClick={importantHandler} className="star-btn">
        <i className="fas fa-star"></i>
      </button>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
