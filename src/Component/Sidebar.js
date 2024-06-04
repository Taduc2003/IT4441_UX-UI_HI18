import React, { useState } from "react";
import "./SideBar.css";
import logo from "../img/logo.png";
import { IoBookOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FaThLarge } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for open/close

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage the sidebar open/close
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="logo-menu">
          <div className="fin-ebank-io">
            <img src={logo} alt="Logo" className="logo" />
            HusTracking
          </div>
          <div className="menu">
            <Link
              to="/overview"
              className={`menu-item ${
                location.pathname === "/overview" ? "active" : ""
              }`}
            >
              <FaThLarge className="menu-icon" />
              <div className="menu-text">Tổng quan</div>
            </Link>
            <Link
              to="/teach"
              className={`menu-item ${
                location.pathname === "/teach" ? "active" : ""
              }`}
            >
              <IoBookOutline className="menu-icon" />
              <div className="menu-text">Giảng dạy</div>
            </Link>
            <Link
              to="/research"
              className={`menu-item ${
                location.pathname === "/research" ? "active" : ""
              }`}
            >
              <GoSearch className="menu-icon" />
              <div className="menu-text">Nghiên cứu</div>
            </Link>
            <Link
              to="/service"
              className={`menu-item ${
                location.pathname === "/service" ? "active" : ""
              }`}
            >
              <FaHeart className="menu-icon" />
              <div className="menu-text">Phục vụ</div>
            </Link>
            <Link
              to="/personal"
              className={`menu-item ${
                location.pathname === "/personal" ? "active" : ""
              }`}
            >
              <MdOutlinePerson className="menu-icon" />
              <div className="menu-text">Cá nhân</div>
            </Link>
            <Link
              to="/createKPI"
              className={`menu-item ${
                location.pathname === "/createKPI" ? "active" : ""
              }`}
            >
              <FaCirclePlus className="menu-icon" />
              <div className="menu-text">Thêm nhiệm vụ</div>
            </Link>
            <Link
              to="/settings"
              className={`menu-item ${
                location.pathname === "/settings" ? "active" : ""
              }`}
            >
              <IoMdSettings className="menu-icon" />
              <div className="menu-text">Cài đặt</div>
            </Link>
            <Link to="/login" className={`menu-item logout`}>
              <CiLogout className="menu-icon" />
              <div className="menu-text">Logout</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
