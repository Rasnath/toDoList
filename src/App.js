import Tasks from "./Components/CurrentTasks/Tasks";
import NewTask from "./Components/NewTasks/NewTask";
import React, { useState } from "react";

function App() {
  const dummyTasks = [
    {
      id: "id1",
      title: "This is a task!",
      priority: "Low",
      date: new Date(2022, 9, 15),
      state: false,
    },
    {
      id: "id2",
      title: "This is a new task",
      priority: "Medium",
      date: new Date(2022, 9, 16),
      state: false,
    },
    {
      id: "id3",
      title: "This is a completed task",
      priority: "Medium",
      date: new Date(2022, 9, 16),
      state: true,
    },
    {
      id: "id4",
      title: "This is a new completed task",
      priority: "Low",
      date: new Date(2022, 10, 15),
      state: true,
    },
  ];

  const [tasksList, setTasksList] = useState([]);

  function addTaskHandler(task) {
    setTasksList(function (prevTasks) {
      return [task, ...prevTasks];
    });
  }

  function completeHandler(id) {
    const indexAtId = tasksList.findIndex((obj) => obj.id === id);
    const updateTasks = tasksList.slice() 
    updateTasks[indexAtId].state = !updateTasks[indexAtId].state
    setTasksList(updateTasks)
  }

  return (
    <div>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasksList} onComplete={completeHandler}></Tasks>
    </div>
  );
}

export default App;
