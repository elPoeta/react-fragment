import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";

const App = props => (
  <div className="container">
    <h1>React Fragment</h1>
    <div className="col-sm mt-5">
      <List permissions={props.permissions} />
    </div>
  </div>
);

const rootElement = document.querySelector("#root");
ReactDOM.render(<App permissions={true} />, rootElement);
