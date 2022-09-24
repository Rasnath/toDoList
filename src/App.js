import Tasks from "./Components/CurrentTasks/Tasks";
import NewTask from "./Components/NewTasks/NewTask";
import React, { useState } from "react";
import IDContext from "./store/id-context";
// import DummyTasks from "./Components/NewTasks/DummyTasks";


function App() {
  const [tasksList, setTasksList] = useState([]);

  function addTaskHandler(task) {
    setTasksList(function (prevTasks) {
      return [task, ...prevTasks];
    });
  }

  function completeHandler(id) {
    // index with id
    const indexAtId = tasksList.findIndex((obj) => obj.id === id);
    // copy array
    const updateTasks = tasksList.slice();
    // update the state for the inverse
    updateTasks[indexAtId].state = !updateTasks[indexAtId].state;
    // update the state
    setTasksList(updateTasks);
  }

  return (
    <IDContext.Provider value={{ onComplet: completeHandler }}>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasksList}></Tasks>
    </IDContext.Provider>
  );
}

export default App;
