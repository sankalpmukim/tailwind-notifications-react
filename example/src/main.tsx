import React from "react";
import ReactDOM from "react-dom/client";
import {
  ExampleComponent,
  NotificationsProvider,
} from "tailwind-notifications-react";
import "./index.css";
import "./App.css";
import App from "./App";
import "tailwind-notifications-react/dist/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationsProvider>
      <ExampleComponent text={"asasas"} />
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);
