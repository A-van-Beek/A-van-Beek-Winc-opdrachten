import store from "../store";

const myData = store.getState().dataReducer;

//average difficult scores all exercises
let arrayScoreDifficult = myData.map((a) => a.difficult_rate);
let totalScoreDiff = arrayScoreDifficult.reduce(function (
  totalScoreDiff,
  current
) {
  return totalScoreDiff + current;
},
0);

export const averageDifficult =
  Math.round((totalScoreDiff / arrayScoreDifficult.length) * 100) / 100;

//average fun scores all exercises
let arrayScoreFun = myData.map((a) => a.fun_score);
let totalScoreFun = arrayScoreFun.reduce(function (totalScoreFun, current) {
  return totalScoreFun + current;
}, 0);

export const averageFun =
  Math.round((totalScoreFun / arrayScoreFun.length) * 100) / 100;

//functie voor het afkorten van lange assignment-namen
export const getShortName = (assignmentName) => {
  if (assignmentName.length > 6) {
    return assignmentName.slice(0, 5) + "*";
  } else {
    return assignmentName;
  }
};

// functie getAverage voor een list in props.
export const getAverage = (list) => {
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

//create list unique students
// ontdubbelen:
function filterStudents(data, key) {
  return [...new Map(data.map((x) => [key(x), x])).values()];
}
const studentUnique = filterStudents(myData, (it) => it.student_id);
//sorteren:
export const studentUniqueSort = studentUnique.sort((a, b) => {
  let fa = a.student_name,
    fb = b.student_name;
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

// filteren array van 1 student
export const dataStudent = (student_id) => {
  const studentRatings = myData.filter(
    (student) => student.student_id === student_id
  );
  return studentRatings;
};
