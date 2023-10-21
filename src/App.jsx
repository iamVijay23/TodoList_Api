import "./App.css";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the API when the component mounts
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []); // The empty dependency array ensures the effect runs only once

  const handleSubmit = (text) => {
  
    const newTodos = [text, ...todos];
    setTodos(newTodos);
  };

  //  based on the index we get we perform the delete operations 
  const handleDelete = (id) => {
    
    const updatedTodos = todos.filter((todo, index) => index !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Navbar/>
      <Form onFormSubmit={handleSubmit} />
      <List todos={todos} onDelete={handleDelete} /> {/* Pass the fetched todos as a prop to List */}
    </div>
  );
};

export default App;
