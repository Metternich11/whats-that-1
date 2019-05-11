import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createRedux } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import NavBar from "./components/NavBar";
import "./index.css";

const store = createRedux();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <NavBar>
        <div className="logo">{"What's that?!"}</div>
        <div className="nav-content"> </div>
      </NavBar>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
