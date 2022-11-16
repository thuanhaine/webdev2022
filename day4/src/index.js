import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Router>


);