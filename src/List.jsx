const List = (props) => {
  const { todos, onDelete } = props;

  return (
    <div className="container">
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="list_container">
            <p>{todo.title}</p>
            <button className="btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default List;
