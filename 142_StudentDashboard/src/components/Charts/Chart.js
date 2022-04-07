import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import store from "../../store";
import * as v from "victory";

// deze heet bij Michiel: RatingsChart
class Chart extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(student_id) {
    console.log(student_id);
  }

  render() {
    const ratingsList = [
      { exercise: "SCRUM", difficult_rate: 5, fun_score: 4 },
      { exercise: "W1D1", difficult_rate: 4, fun_score: 3 },
      { exercise: "W1D2", difficult_rate: 6, fun_score: 2 },
      { exercise: "W2D1", difficult_rate: 3, fun_score: 1 },
    ];

    return (
      <>
        <v.VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={30}
        >
          <v.VictoryGroup offset={20}>
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
          />
          <v.VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            // tickFormat={(x) => `$${x / 1000}k`}
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
  }
}

export default Chart;
