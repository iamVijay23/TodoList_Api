
const List = (props) => {
  // Destructing the props 
  let { todos, onDelete } = props;

  return (
    <div className="container">
      {/* Mapping the todos */}
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="list_container">
            {/*  Taking the title only from the todos */}
            <p>{todo.title}</p>
            <button className="btn" onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default List;
