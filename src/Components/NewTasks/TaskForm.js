import "./TaskForm.css";
import Form from "../UI/Form";
import React, { useState } from "react";

function TaskForm(props) {
  const [givenTask, setGivenTask] = useState("");
  const [givenDate, setGivenDate] = useState("");
  const [givenPriority, setGivenPriority] = useState("Low");

  function dateHandler(event) {
    setGivenDate(event.target.value);
  }

  function titleHandler(event) {
    setGivenTask(event.target.value);
  }

  function priorityHandler(event) {
    setGivenPriority(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (givenTask.trim().length === 0 || givenDate.trim().length === 0) {
    } else {
      const taskData = {
        title: givenTask,
        date: new Date(givenDate),
        priority: givenPriority,
      };
      props.onNewTaskData(taskData);
      setGivenTask("");
      setGivenDate("");
      setGivenPriority("Low");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task_controls">
        <Form>
          <label>Date</label>
          <input type="date" value={givenDate} onChange={dateHandler} />
        </Form>
        <Form className="new-form_title">
          <label>Task</label>
          <input type="text" value={givenTask} onChange={titleHandler} />
        </Form>
        <Form>
          <label>Priority</label>
          <select value={givenPriority} onChange={priorityHandler}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </Form>
      </div>
      <div className="new-task_action">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
