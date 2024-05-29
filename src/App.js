import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./Component/Home/MyComponent";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Overview from "./Component/Overview/Overview";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
};

export default App;
