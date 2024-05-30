import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import "./Header.css";

const Header = () => {
  return (
      <div className="taskbar">
          <div className="search-bar">
            <CiSearch />
            <input type="text" placeholder="Search..." />
            <MdOutlineKeyboardVoice />
          </div>
          <div className="notification-icon">
            <IoMdNotificationsOutline />
          </div>
          <div className="user">
            <div className="userInfo">
                {/* <div className="userName">
                    <h3>Hoang Quan</h3>
                </div> */}
                <div className="job">
                    <h4>Hoàng Quân</h4>
                </div>
            </div>
            {/* <div className="avatar">
            </div> */}
          </div>
          <div className="moreInfo">
            <GoTriangleDown />
          </div>
      </div>
  );
};

export default Header;