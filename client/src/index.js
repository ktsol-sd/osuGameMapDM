import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Authorized from "./pages/authorized";
import Nav from "./components/Nav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/authorized" element={<Authorized />} />
      </Routes>
      {/* <Nav /> */}
      <ToastContainer position="top-center" />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
