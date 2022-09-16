import TaskDate from "./TaskDate";
import "./TaskItem.css";
import Card from "../UI/Card";

function TaskItem(props) {
  function betaFunction() {}

  function completeHandler() {
    props.onState(props.id);
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
    <li onClick={betaFunction}>
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
    </li>
  );
}
export default TaskItem;
