import "./TasksList.css";
import TaskItem from "./TaskItem";

function Taskslist(props) {
  let tasksContent = <h2 className="tasks-list_fallback">No tasks found</h2>;

  function completeHandler(id) {
    props.onComplete(id);
  }

  if (props.items.length > 0) {
    tasksContent = props.items.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        title={task.title}
        priority={task.priority}
        date={task.date}
        state={task.state}
        onState={completeHandler}
      />
    ));
  }

  return <ul className="tasks-list">{tasksContent}</ul>;
}
export default Taskslist;
