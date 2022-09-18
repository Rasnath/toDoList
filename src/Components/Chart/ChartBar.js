import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  function chartPriotityHandler (){
props.onChartPriority(props.label)
  }

  return (
    <div className="chart-bar" onClick={chartPriotityHandler}>
      <div className="chart-bar_inner" >
        <div className="chart-bar_fill" style={{height: barFillHeight}}>
            <div className="chart-text">{props.value}</div>
        </div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
}
export default ChartBar;
