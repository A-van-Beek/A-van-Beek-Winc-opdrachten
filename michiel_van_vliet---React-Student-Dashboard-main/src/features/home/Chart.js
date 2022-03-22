import React from "react";
import { useSelector } from "react-redux";
import RatingsChart from "../shared/RatingsChart";

const getAverage = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    let total = 0;
    list.forEach((number) => {
      total += number;
    });
    return total / list.length;
  }
};

const getShortName = (assignmentName) => {
  if (assignmentName.length > 6) {
    return assignmentName.slice(0, 5) + "*";
  } else {
    return assignmentName;
  }
};

const Chart = () => {
  const students = useSelector((state) => state.students);
  const assignments = useSelector((state) => state.assignments);

  const isSelected = (studentName) => {
    const student = students.find((student) => student.name === studentName);
    return student.isSelected;
  };

  let ratingsList = [];
  assignments.forEach((assignment) => {
    const funRatings = assignment.funRatings;
    const difficultyRatings = assignment.difficultyRatings;

    let funList = [];
    funRatings.forEach((funRating) => {
      if (isSelected(funRating.name)) {
        funList.push(funRating.rating);
      }
    });

    let difficultyList = [];
    difficultyRatings.forEach((difficultyRating) => {
      if (isSelected(difficultyRating.name)) {
        difficultyList.push(difficultyRating.rating);
      }
    });

    const newRating = {
      assignment: getShortName(assignment.name),
      averageFunRating: getAverage(funList),
      averageDifficultyRating: getAverage(difficultyList),
    };

    ratingsList.push(newRating);
  });

  return <RatingsChart ratingsList={ratingsList} />;
};

export default Chart;
