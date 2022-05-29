import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/Nav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <ToastContainer position="top-center" />
    <App />
  </React.StrictMode>
);
