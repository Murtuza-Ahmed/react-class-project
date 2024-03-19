import { useState } from "react";
import "../App.css";
const AgeCalculator = () => {
  const [age, setAge] = useState("");
  function CalculateAge() {
    let userDate = new Date(age);
    let date = new Date();
    
    console.log(newDate);
    console.log(userDate);
    console.log(date);
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
      </div>
    </div>
  );
};
export default AgeCalculator;
