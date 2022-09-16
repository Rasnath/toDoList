import "./TaskDate.css";

function TaskDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear()

  return (
    <div className="task-date">
      <div className="task-date_day">{day}</div>
      <div className="task-date_month">{month}</div>
      <div className="task-date_year">{year}</div>
    </div>
  );
}

export default TaskDate;
