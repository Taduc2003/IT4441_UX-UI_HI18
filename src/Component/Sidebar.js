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
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="logo-menu">
          <div class="fin-ebank-io">
            <img src={logo} alt="Logo" class="logo" />
            HusTracking
          </div>
          <div class="menu">
            <div class="menu-item active">
              <FaThLarge className="menu-icon" />
              <div class="menu-text">Tổng quan</div>
            </div>
            <div class="menu-item">
              <IoBookOutline className="menu-icon" />
              <div class="menu-text">Giảng dạy</div>
            </div>
            <div class="menu-item">
              <GoSearch className="menu-icon" />
              <div class="menu-text">Nghiên cứu</div>
            </div>
            <div class="menu-item">
              <FaHeart className="menu-icon" />
              <div class="menu-text">Phục vụ</div>
            </div>
            <div class="menu-item">
              <FaPen className="menu-icon" />

              <div class="menu-text">Học tập</div>
            </div>
            <div class="menu-item">
              <FaCirclePlus className="menu-icon" />
              <div class="menu-text">Thêm nhiệm vụ</div>
            </div>
            <div class="menu-item">
              <IoMdSettings className="menu-icon" />
              <div class="menu-text">Cài đặt</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="logout-button">
            <CiLogout className="menu-icon" />
            <div class="logout-text">Logout</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
