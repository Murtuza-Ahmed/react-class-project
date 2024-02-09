import { useState } from "react";
import "./style.css";
function CallBack({ getColor }) {
  const [activeColor, setActiveColor] = useState();
  function handleChange(item) {
    const value = item.target;
    setActiveColor(value);
    getColor(value);
  }
  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        value={activeColor}
        onChange={handleChange}
      />
    </div>
  );
}

export default CallBack;
