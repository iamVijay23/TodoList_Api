import "./App.css";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Api Call here 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Request Error:", error);
        setLoading(false);
      });
  }, []);
  
  

  const handleSubmit = (text) => {
  

    // Create a new to-do item object
    const newTodo = {
      id: todos.length + 1, // You can generate a unique ID in your actual application
      title: text,
    };

    // Update the todos state by adding the new to-do item
    setTodos([newTodo,...todos]);
  };

  const handleDelete = (id) => {

    const updatedTodos = todos.filter((todo) => todo.id !== id);
  // console.log(updatedTodos)
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Navbar />
      <Form onFormSubmit={handleSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <List todos={todos} onDelete={handleDelete} />
       )}
    </div>
  );
};

export default App;
