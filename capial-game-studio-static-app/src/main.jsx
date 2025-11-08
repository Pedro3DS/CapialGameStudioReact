import React from "react";
import  { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./About.jsx";
import "./index.css"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/New">
      <Routes >
        <Route path="/" element={<App />} />

        <Route path="/churusbango" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
