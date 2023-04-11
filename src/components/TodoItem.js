const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    return (
      <li className="item">
        <div className="content">
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
            />
            <button onClick={() => delTodo(itemProp.id)}>Delete</button>
            {itemProp.title}
        </div>
        
      </li>
    );
  };
  export default TodoItem;