import React from "react";
import { createRoot } from "react-dom/client";
import ShopingList from "./ShopingList";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ShopingList />);
