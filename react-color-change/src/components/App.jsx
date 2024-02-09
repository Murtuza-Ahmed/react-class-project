import CallBack from "./CallBack";
import React, { useState } from "react";
import "./style.css";
function App() {
  const [UIColor, setUIColor] = useState(null);
  function getColor(color) {
    setUIColor(color);
  }
  return (
    <div className="App">
      <div
        className="App-color-container"
        style={{ backGround: `${UIColor}` }}
      ></div>
      <CallBack getColor={getColor} />
    </div>
  );
}
export default App;
