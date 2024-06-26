import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./Component/Home/MyComponent";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Overview from "./Component/Overview/Overview";
import Teach from "./Component/Teach/Teach";
import Research from "./Component/NghienCuu/Research";
import Service from "./Component/servicekpi/Service";
import Setting from "./Component/Settings/Setting";
import CreateKPI from "./Component/createKPI/CreateKPI";
import KPISetup from "./Component/createKPI/KPISetup";
import KPISuccess from "./Component/createKPI/KPISuccess";
import Personal from "./Component/Personal/Personal.js";
// import Schedule from "./Component/Overview/Schedule/Schedule";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <Route path="/createkpi" element={<CreateKPI />} />
          <Route path="/kpisetup" element={<KPISetup />} />
          <Route path="/kpisuccess" element={<KPISuccess />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
