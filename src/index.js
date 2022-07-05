import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeContextProvider } from "./store/theme-context";

ReactDOM.render(
  <ThemeContextProvider>
    <Router>
      <App />
    </Router>
  </ThemeContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
