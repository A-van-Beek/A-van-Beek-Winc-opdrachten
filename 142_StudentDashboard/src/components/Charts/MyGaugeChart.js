import React from "react";
import GaugeChart from "react-gauge-chart";
import averageDifficult from "../calculations";

function MyGaugeChart() {
  const chartStyle = {
    width: "200px",
  };
  const chartTitle = {
    color: "#6441a5",
    marginLeft: "35px",
  };

  return (
    <>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={30}
        colors={["red", "green"]}
        // arcWidth={0.3} //bredere boog: niet mooi
        percent={averageDifficult} //waar staat pointer
        hideText={true}
        needleColor={"#6441a5"}
        needleBaseColor={"#6441a5"}
        style={chartStyle}
      />
      <chart-title style={chartTitle}>
        difficult rate average: {averageDifficult}
      </chart-title>
    </>
  );
}
export default MyGaugeChart;
