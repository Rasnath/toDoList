import TaskForm from "./TaskForm";
import React, { useState } from "react";
import style from "./NewTask.module.css";
import Button from "../UI/Button";

function NewTask(props) {
  const [open, setOpen] = useState(false);
  
  function saveNewTaskData(givenTaskData) {
    const taskData = {
      ...givenTaskData,
      id: Math.random().toString(),
      state: false,
    };
    props.onAddTask(taskData);
    setOpen(false);
  }

  function openFormHandler() {
    setOpen(true);
  }
  function onCancelHandler() {
    setOpen(false);
  }

  return (
    <div className={style['new-task']}>
      {!open && <Button onClick={openFormHandler}> Add New Task</Button>}
      {open && (
        <TaskForm
          onNewTaskData={saveNewTaskData}
          onCancel={onCancelHandler}
        ></TaskForm>
      )}
    </div>
  );
}

export default NewTask;
