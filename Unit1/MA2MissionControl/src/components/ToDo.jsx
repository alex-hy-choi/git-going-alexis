function Todo(props) {
  // starter code with things taken out
    return (
      <li className="todo stack-small">
        <div className="c-cb">
            <input 
              id={props.id} 
              type="checkbox" 
              defaultChecked={props.completed} 
              onChange={() => props.toggleTaskCompleted(props.id)}/>
            <label className="todo-label" htmlFor={props.id}>
                {props.name}
            </label>
        </div>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </li>
    );
  }
  
  export default Todo;