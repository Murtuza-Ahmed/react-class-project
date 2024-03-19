import { useState } from "react";
import "../App.css";
const AgeCalculator = () => {
  const [age, setAge] = useState("");
  const [minusDay, setMinusDay] = useState(0);
  const [minusMonth, setMinusMonth] = useState(0);
  const [minusYear, setMinusYear] = useState(0);

  function CalculateAge() {
    let userDate = new Date(age);
    let currentDate = new Date();
    let userDay = userDate.getDate();
    let userMonth = userDate.getMonth() + 1;
    let userYear = userDate.getFullYear();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let diffDays = currentDay - userDay;
    let diffMonths = userMonth - currentMonth;
    let diffYear = currentYear - userYear;

    setMinusDay(diffDays);
    setMinusMonth(diffMonths);
    setMinusYear(diffYear);
  }
  return (
    <div>
      <div className="container">
        <h1>
          Age <span>Calculator</span>
        </h1>
        <div className="input-box">
          <input type="date" onChange={(e) => setAge(e.target.value)} />
          <button onClick={CalculateAge}>Calculate</button>
        </div>
        <div className="calculator">
          <div className="day">
            <span>Days</span> <span className="minus-day">{minusDay}</span>
          </div>
          <div className="month">
            <span>Months</span>{" "}
            <span className="minus-month">{minusMonth}</span>
          </div>
          <div className="year">
            <span>Years</span> <span className="minus-year">{minusYear}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgeCalculator;
