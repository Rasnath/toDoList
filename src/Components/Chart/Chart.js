import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const data = [
    { label: "High", value: 0 },
    { label: "Medium", value: 0 },
    { label: "Low", value: 0 },
  ];

  const filteredTasks = props.tasks.filter((task) => {
    
      return task.state === false
})
  ;

  for (const task of filteredTasks) {
    const index = data.findIndex((obj) => obj.label === task.priority);
    data[index].value += 1;
  }
  //retrive every value as array
  const arrayValues = data.map(one => one.value)
  // find de maxvalue ...
  const maximimValue = Math.max(...arrayValues)

  function chartPriorityHandler(priority){
    props.onFilterPriority(priority)
  }

  return (
    <div className="chart">
      {data.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maximimValue}
          label={data.label}
          onChartPriority={chartPriorityHandler}
        />
      ))}
    </div>
  );
}
export default Chart;
