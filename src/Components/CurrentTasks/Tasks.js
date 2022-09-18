import "./Tasks.css";
import Card from "../UI/Card";
import Filter from "../Filter/Filter";
import React, { useState } from "react";
import Taskslist from "./TasksList";
import Chart from "../Chart/Chart";

function Tasks(props) {
  const [givenPriority, setGivenPriority] = useState("All");
  const [completed, setCompleted] = useState(false);


  function filterPriorityHandler(filterPriority) {
    setGivenPriority(filterPriority);
  }
  function completedHandler() {
    setCompleted(true);
  }
  function uncompletedHandler() {
    setCompleted(false);
  }

  const sortTasks = props.tasks.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  const filteredTasks = sortTasks.filter((task) => {
    if (givenPriority === "All" && !completed) {
      return task.state === false;
    } else if (givenPriority === "All" && completed) {
      return task.state === true;
    } else if (completed) {
      return task.priority === givenPriority && task.state === true;
    } else {
      return task.priority === givenPriority && task.state === false;
    }
  });

  function completeHandler(id) {
    props.onComplete(id);
  }

  return (
    <Card className="tasks">
      <Filter
        selected={givenPriority}
        onFilterPriority={filterPriorityHandler}
        onCompleted={completedHandler}
        onUnCompleted={uncompletedHandler}
        oncompletState={completed}
      />
      <Chart tasks={sortTasks} onFilterPriority={filterPriorityHandler}></Chart>
      <Taskslist
        items={filteredTasks}
        onComplete={completeHandler}
      ></Taskslist>
    </Card>
  );
}
export default Tasks;
