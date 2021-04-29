import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Routes from "./Routes";
import "./index.css";

const App: React.FC = () => (
  <HashRouter>
    <Routes />
    <div styleName="testClass">
      Your create-react-lite application is ready.
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.querySelector("#root"));
