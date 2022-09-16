import "./NewTask.css";
import TaskForm from "./TaskForm";
import React, {useState} from "react";

function NewTask(props) {

  const [open, setOpen] = useState(false)
  function saveNewTaskData(givenTaskData) {
    const taskData = {
      ...givenTaskData,
      id: Math.random().toString(),
      state: false
    };
    props.onAddTask(taskData);
    setOpen(false)
  }

  function openFormHandler (){
    setOpen(true)
  }
  function onCancelHandler () {
    setOpen(false)
  }

  return (
    <div className="new-task">
      {!open && <button onClick={openFormHandler}> Add New Task</button>}
      {open && <TaskForm onNewTaskData={saveNewTaskData} onCancel={onCancelHandler}></TaskForm>}
    </div>
  );
}

export default NewTask;
