import React from "react";
import GaugeChart from "react-gauge-chart";

function MyGaugeChart() {
  const chartStyle = {
    width: "200px",
  };
  const chartTitle = {
    color: "red",
    marginLeft: "35px",
  };
  return (
    <>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={30}
        colors={["red", "green"]}
        // arcWidth={0.3} //bredere boog: niet mooi
        percent={0.37} //waar staat pointer
        hideText={true}
        needleColor={"#6441a5"}
        needleBaseColor={"#6441a5"}
        style={chartStyle}
      />
      <chartTitle style={chartTitle}>fun factor average</chartTitle>
    </>
  );
}
export default MyGaugeChart;
