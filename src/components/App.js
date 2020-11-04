import React from "react";
import "./../styles/App.css";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const task = React.useRef();
  const [taskString, setTaskString] = React.useState("");
  const [editedTaskString, setEditedTaskString] = React.useState("");
  const editedTask = React.useRef();
  const [selectedTask, setSelectedTask] = React.useState(null);

  const saveTask = () => {
    if (taskString === "") return;
    setTasks((tasks) => [
      ...tasks,
      {
        id: taskString + tasks.length,
        name: taskString
      }
    ]);
    setTaskString("");
  };

  const editTask = (id) => {
    if (editedTaskString === "") return;
    let tasksRep = tasks.map((task) => {
      let newTask = { ...task };
      if (task.id === id) newTask.name = editedTaskString;
      return newTask;
    });
    setTasks((tasks) => tasksRep);
    setSelectedTask(null);
    setEditedTaskString("");
  };

  const deleteTask = (id) => {
    let tasksRep = tasks.filter((task) => task.id !== id);
    setTasks((tasks) => tasksRep);
  };

  const edit = (id) => {
    setSelectedTask(id);
  };

  const handleTaskChange = (e) => {
    let value = e.target.value;
    setTaskString(value);
  };

  const handleEdit = (e) => {
    let value = e.target.value;
    setEditedTaskString(value);
  };

  return (
    <div id="main">
      <textarea
        id="task"
        value={taskString}
        onChange={handleTaskChange}
        ref={task}
        rows="4"
        cols="50"
      ></textarea>
      <button id="btn" onClick={saveTask}>
        save
      </button>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="list">{task.name}</span>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              delete
            </button>
            <button className="edit" onClick={() => edit(task.id)}>
              edit
            </button>
            {selectedTask === task.id ? (
              <>
                <textarea
                  ref={editedTask}
                  value={editedTaskString}
                  onChange={handleEdit}
                  className="editTask"
                  rows="4"
                  cols="50"
                ></textarea>
                <button className="saveTask" onClick={() => editTask(task.id)}>
                  save
                </button>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
