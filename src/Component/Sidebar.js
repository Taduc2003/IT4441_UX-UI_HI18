import React from "react";
import "./SideBar.css";
import logo from "../img/logo.png";
import { IoBookOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { FaThLarge } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="sidebar">
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
              to="/study"
              className={`menu-item ${
                location.pathname === "/study" ? "active" : ""
              }`}
            >
              <FaPen className="menu-icon" />
              <div className="menu-text">Học tập</div>
            </Link>
            <Link
              to="/add-task"
              className={`menu-item ${
                location.pathname === "/add-task" ? "active" : ""
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
          </div>
        </div>
        <div className="footer">
          <div className="logout-button">
            <CiLogout className="menu-icon" />
            <div className="logout-text">Logout</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
