import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

// Redux Imports
import { Provider } from "react-redux";
import { createRedux } from "./redux/store";

// Router Setup
import { BrowserRouter } from "react-router-dom";

// Component & Container Imports
import NavBar from "./components/NavBar";

const store = createRedux();

ReactDOM.render(
  <Provider store={store}>
    <NavBar>
      <div className="logo">{"What's that?!"}</div>
      <div className="nav-content"> </div>
    </NavBar>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
