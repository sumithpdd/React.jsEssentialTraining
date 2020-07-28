import React from "react";

const getPercent = decimal => {
  return decimal * 100 + "%";
};
const calcGoalProgess = (total, goal) => {
  return getPercent(total / goal);
};
const SkiDayCounter = ({total,powder,backcountry,goal}) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgess(total,goal)}</p>
      </div>
    </section>
  );
};
export default SkiDayCounter;
