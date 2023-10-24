# React To-Do List Application

![React Logo](https://reactjs.org/logo-og.png)

A simple and interactive to-do list application built with React. It allows you to manage your tasks, add new items, and mark them as completed.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Integration](#api-integration)


## Features

- **Add To-Do Items**: Easily add new to-do items by typing your task and clicking "Add."

- **Delete To-Do Items**: Remove tasks you no longer need by clicking the "Delete" button.

- **Interactive Interface**: User-friendly design for a seamless task management experience.

## Demo

For a live demonstration of the application, you can visit the [To-Do List Demo](https://example.com/todo-list-demo).

## Getting Started

### Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   cd react-todo-list-app

### Api Integration 
This application initially fetches to-do items from an external API. You can customize the API endpoint by modifying the useEffect in the App.js file:
// Modify the API endpoint to fetch data  Feel free to use a different API or data source according to your needs.
 ```bash
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
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
