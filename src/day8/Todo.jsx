import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/todos?limit=10");
        setTodos(res.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
      setLoading(false);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const res = await axios.post("https://dummyjson.com/todos/add", {
        todo: newTodo,
        completed: false,
        userId: 1,
      });
      setTodos([res.data, ...todos]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  

  const deleteTodo = async (id) => {
    try {
       await axios.delete(`https://dummyjson.com/todos/${id}`);
      
        setTodos(todos.filter((todo) => todo.id !== id));
      
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  
    const toggleComplete = async (id, completed) => {
    try { 
      const res = await axios.put(`https://dummyjson.com/todos/${id}`, {
        completed: !completed,
      });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: res.data.completed } : todo
        )
      );
    } catch (error) {
      console.error("Error toggling todo completion:", error);
    }
  };


  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <input
        value={newTodo}
        className="todo-input"
        type="text"
        placeholder="Enter a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="todo-button" onClick={addTodo}>
        Add Todo
      </button>
      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <ul>
          
          {todos.map((todo) => (
            <li key={todo.id}>
               <input
                type="checkbox"  
                checked={todo.completed}
                onChange={() => { toggleComplete(todo.id, todo.completed)
                }}
              />
              {todo.todo}
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
