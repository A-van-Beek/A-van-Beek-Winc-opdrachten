import React from "react";
import GaugeChart from "react-gauge-chart";

function MyGaugeChart() {
  const chartStyle = {
    width: "200px",
  };

  return (
    <>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={30}
        colors={["red", "green"]}
        hideText={true}
        needleColor={"#6441a5"}
        needleBaseColor={"#6441a5"}
        style={chartStyle}
      />
    </>
  );
}
export default MyGaugeChart;
