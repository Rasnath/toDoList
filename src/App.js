import Tasks from "./Components/CurrentTasks/Tasks";
import NewTask from "./Components/NewTasks/NewTask";
import React, { useState } from "react";
import DummyTasks from "./Components/NewTasks/DummyTasks";

function App() {
  
  const [tasksList, setTasksList] = useState(DummyTasks);

  function addTaskHandler(task) {
    setTasksList(function (prevTasks) {
      return [task, ...prevTasks];
    });
  }

  function completeHandler(id) {
    // index with id
    const indexAtId = tasksList.findIndex((obj) => obj.id === id);
    // copy array
    const updateTasks = tasksList.slice() 
    // update the state for the inverse
    updateTasks[indexAtId].state = !updateTasks[indexAtId].state
    // update the state
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
