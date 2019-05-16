import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "antd/lib/button";
import { Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
