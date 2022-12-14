import "./TaskForm.css";
import Form from "../UI/Form";
import React, { useState, Fragment } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

function TaskForm(props) {
  const [givenTask, setGivenTask] = useState("");
  const [givenDate, setGivenDate] = useState("");
  const [givenPriority, setGivenPriority] = useState("Low");
  const [error, setError] = useState();

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
    if (givenTask.trim().length === 0 && givenDate.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid task and date",
      });
      return;
    }
    if (givenTask.trim().length === 0) {
      setError({
        title: "Invalid task",
        message: "Please enter a valid task",
      });
      return;
    }
    if (givenDate.trim().length === 0) {
      setError({
        title: "Invalid Date",
        message: "Please enter a valid date",
      });
      return;
    }
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

  function desmissHandler() {
    setError(null);
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onDesmiss={desmissHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-task_controls">
          <Form>
            <label>Date</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={givenDate}
              onChange={dateHandler}
            />
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
          <Button type="button" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add Task</Button>
        </div>
      </form>
    </Fragment>
  );
}

export default TaskForm;
