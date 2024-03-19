import { useState } from "react";
import "../App.css";
const AgeCalculator = () => {
  const [age, setAge] = useState("");
  const [day, setDay] = useState("");
  function CalculateAge() {
    let userDate = new Date(age);
    let currentDate = new Date();
    let userDay = userDate.getDay();
    let userMonth = userDate.getMonth();
    let userYear = userDate.getFullYear();
    let currentDay = currentDate.getDay();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    let setDay = userDay - currentDay;
    let minusMonth = userMonth - currentMonth;
    let minusYear = currentYear - userYear;
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
        <div>Year{minusYear}</div>
        <div>Month{minusMonth}</div>
        <div>Days{minusYear}</div>
      </div>
    </div>
  );
};
export default AgeCalculator;
