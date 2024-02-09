import { useState } from "react";
function App() {
  const [UIColor, setUIColor] = useState(null);
  return (
    <div className="App">
      <div className="App-color-container"></div>
    </div>
  );
}

export default App;
