import TaskDate from "./TaskDate";
import "./TaskItem.css";
import Card from "../UI/Card";
import React, { useContext } from "react";
import IDContext from "../../store/id-context";


function TaskItem(props) {

  const idCxt = useContext(IDContext)

  function completeHandler() {
    idCxt.onComplet(props.id);
  }

  let color = "#40005d";

  if (props.priority === "Low") {
    color = "#0356fc";
  } else if (props.priority === "Medium") {
    color = '#fc9403'
  } else if (props.priority === "High") {
    color = '#750000'
  }

  return (
      <Card className="task-item">
        <div>
          <TaskDate date={props.date} />
        </div>
        <div className="task-item_description">
          <h2>{props.title}</h2>
          <div className="task-item_priority" style={{backgroundColor: color}}>
            {props.priority}
          </div>
          {!props.state && (
            <button className="task" onClick={completeHandler}>
              Done
            </button>
          )}
          {props.state && (
            <button className="task" onClick={completeHandler}>
              Remove
            </button>
          )}
        </div>
      </Card>
  );
}
export default TaskItem;
