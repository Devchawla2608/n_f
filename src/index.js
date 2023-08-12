// Importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Importing BrowserRouter and App from react-router-dom

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";

// Importing the main App file
import "remixicon/fonts/remixicon.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
