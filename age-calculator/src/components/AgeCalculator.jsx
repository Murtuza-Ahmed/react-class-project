import { useState } from "react";
import "../App.css";
const AgeCalculator = () => {

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
