import Button from "../UI/Button";
import "./Filter.css";

const Filter = (props) => {
  function filterPriorityHandler(event) {
    props.onFilterPriority(event.target.value);
  }

  return (
    <div className="task-filter">
      <div className="task-filter_control">
        <label>Filter by Priority</label>
        <select value={props.selected} onChange={filterPriorityHandler}>
          <option value="All">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {props.oncompletState && <Button className="button" onClick={props.onUnCompleted}>Tasks</Button>}
        {!props.oncompletState && <Button className="button" onClick={props.onCompleted}>Completed</Button>}
      </div>
    </div>
  );
};

export default Filter;
