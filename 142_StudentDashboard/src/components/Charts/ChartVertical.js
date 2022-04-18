import React from "react";
import * as v from "victory";

// deze geeft de vertikale variant van de staafgrafiek
const ChartVertical = ({ ratingsList }) => {
  return (
    <>
      <v.VictoryChart domainPadding={30} horizontal={true} height={800}>
        <v.VictoryGroup offset={3}>
          <v.VictoryBar
            data={ratingsList}
            x="exercise"
            y="fun_score"
            style={{ data: { fill: "green" } }}
          />
          <v.VictoryBar
            data={ratingsList}
            x="exercise"
            y="difficult_rate"
            style={{ data: { fill: "blue" } }}
          />
        </v.VictoryGroup>

        <v.VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickLabelComponent={
            <v.VictoryLabel style={{ fontSize: 7, color: "black" }} />
          }
        />
        <v.VictoryAxis
          dependentAxis
          domain={[0, 5]}
          tickLabelComponent={
            <v.VictoryLabel
              style={{ fontSize: 10, color: "black" }}
              textAnchor={"end"}
            />
          }
        />
        <v.VictoryLegend
          data={[
            {
              name: "Hoe Leuk?",
              symbol: {
                fill: "green",
              },
            },
            {
              name: "Hoe Moeilijk?",
              symbol: {
                fill: "blue",
              },
            },
          ]}
          orientation="vertical"
        />
      </v.VictoryChart>
    </>
  );
};

export default ChartVertical;
