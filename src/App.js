import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./Component/Home/MyComponent";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
<<<<<<< Updated upstream
import Overview from "./Component/Overview/Overview";
import Teach from "./Component/Teach/Teach";
import Research from "./Component/NghienCuu/Research";
import Service from "./Component/servicekpi/Service";
import Setting from "./Component/Settings/Setting";
import Personal from "./Component/Personal/Personal.js";
// import Schedule from "./Component/Overview/Schedule/Schedule";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/schedule" element={<Schedule />} /> */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/research" element={<Research />} />
        {/* Remove the conflicting import statement */}
        {/* import Service from "./Component/servicekpi/Service"; */}
        <Route path="/service" element={<Service />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
=======
import Header from "./Component/header/Header";
const App = () => {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router> */}
      <Header />
    </div>
>>>>>>> Stashed changes
  );
};

export default App;
