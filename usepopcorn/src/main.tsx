import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import App from "./App-v1.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Test />
    <StarRating maxRating={5} defaultRating={3} /> */}
  </React.StrictMode>
);
