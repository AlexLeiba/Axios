import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
