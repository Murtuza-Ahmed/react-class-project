import "../App.css";
const AgeCalculator = () => {
  return (
    <div>
      <div className="container">
        <h1>
          Age <span>Calculator</span>
        </h1>
        <div className="input-box">
          <input type="date" />
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
};
export default AgeCalculator;
