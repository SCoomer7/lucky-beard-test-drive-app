import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './app/store';
import { Provider } from "react-redux";

// using BrowserRouter for client-side routing, and providing the Redux store to the entire app using the Provider component.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
