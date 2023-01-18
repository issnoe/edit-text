import React from "react";
import ReactDOM from "react-dom";
import Editor from "./editor";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbokkkkx</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Editor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
