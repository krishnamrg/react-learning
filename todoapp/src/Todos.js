import React from "react";
import "./Todos.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <div className="todos-list collection">
      {
      todos.length > 0 
      ? (
        todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span onClick={() => completeTodo(todo.id)}>{todo.content}</span>
            </div>
          );
        })
      ) 
      : (
        <div className="empty-list-msg">hurry all caught up!!!</div>
      )}
    </div>
  );
};

export default Todos;