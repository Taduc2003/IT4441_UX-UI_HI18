import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./Component/Home/MyComponent";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Overview from "./Component/Overview/Overview";
import Teach from "./Component/Teach/Teach";
import Research from "./Component/NghienCuu/Research";
import Service from "./Component/servicekpi/Service";
import Settings from "./Component/settings/Settings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/research" element={<Research />} />
        <Route path="/service" element={<Service />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
};

export default App;