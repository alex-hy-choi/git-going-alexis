import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from "./components/ToDo";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import ButlerImage from './assets/butler.png'


// Todo list
function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(tasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  )
  );

  // console.log({props});

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }
  
  // img src=specific image in the ToDo
  return (
    <div className="todoapp stack-large">
      <h2>Work Hard, Play Hard</h2>
      <img src={ButlerImage} alt="Jerry Lee, Butler" id="butler" />
      <Form addTask={addTask} />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
};

  
export default App