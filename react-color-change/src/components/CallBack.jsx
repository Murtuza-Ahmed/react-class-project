import { useState } from "react";
import "./style.css";
// CHILD
function CallBack({ getColor }) {
  const [activeColor, setActiveColor] = useState("");
  const [UIcolor, setUIColor] = useState(null);
  function handleChange(item) {
    const value = item.target.value;
    setActiveColor(value);
    getColor(value);
  }
  function getColor(color) {
    setUIColor(color);
  }
  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        value={activeColor}
        onChange={handleChange}
        placeholder="Enter the Color"
      />
      <div className="App">
        <div
          className="App-color-container"
          style={{ background: `${UIcolor}` }}
        ></div>
      </div>
    </div>
  );
}

export default CallBack;
