import React from "react";
import * as v from "victory";

// deze heet bij Michiel: RatingsChart
const Chart = ({ ratingsList }) => {
  return (
    <>
      <v.VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={30}
      >
        <v.VictoryGroup offset={3}>
          {/* offset regelt de afstand 2 balken */}
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
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          // tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          // label="Opdracht"
          tickLabelComponent={
            <v.VictoryLabel
              angle={60} //scheefzetten tekst
              style={{ fontSize: 7, color: "black" }}
              textAnchor={"start"}
            />
          }
        />
        <v.VictoryAxis
          dependentAxis
          // label="Rating"
          domain={[0, 5]}
          tickLabelComponent={
            <v.VictoryLabel
              style={{ fontSize: 7, color: "black" }}
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
          orientation="horizontal"
        />
      </v.VictoryChart>
    </>
  );
};

export default Chart;
