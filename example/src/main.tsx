import React from "react";
import ReactDOM from "react-dom/client";
import { ExampleComponent } from "tailwind-notifications-react";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExampleComponent text={"asasas"} />
    <App />
  </React.StrictMode>
);
