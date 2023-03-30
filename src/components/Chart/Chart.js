import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((it) => it.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.lebel} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
