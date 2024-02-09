import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import CallBack from "./CallBack";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
root.render(<CallBack />);
