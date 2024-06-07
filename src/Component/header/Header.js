import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import "./Header.css";

const notificationsData = [
  {
    id: 1,
    title: "Nhiệm vụ hoàn thành",
    time: "2 phút trước",
    content: "Bạn đã hoàn thành nhiệm vụ dạy học môn ITSS",
    status: "chưa xem",
  },
  {
    id: 2,
    title: "Đổi mật khẩu thành công",
    time: "1 giờ trước",
    content: "Bạn đã đổi mật khẩu thành công",
    status: "chưa xem",
  },
  {
    id: 3,
    title: "Chào mừng",
    time: "2 giờ trước",
    content: "Chào mừng trở lại. Hãy xem những nhiệm vụ hôm nay.",
    status: "chưa xem",
  },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/personal");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleLogoutClick = () => {
    navigate("/login");
  };

  const toggleNotifications = () => {
    setShowNotifications((prevState) => !prevState);
  };

  const handleNotificationClick = (notification) => {
    if (notification.status === "chưa xem") {
      notification.status = "đã xem";
    }
    setSelectedNotification(notification);
    setNotifications([...notifications]);
  };

  const closeNotificationModal = () => {
    setSelectedNotification(null);
  };

  return (
    <div>
      <div className={`taskbar ${selectedNotification ? "blurred" : ""}`}>
        {/* <div className="search-bar">
          <CiSearch />
          <input type="text" placeholder="Search..." />
          <MdOutlineKeyboardVoice />
        </div> */}
        <div className="notification-icon" onClick={toggleNotifications}>
          <IoMdNotificationsOutline />
          {showNotifications && (
            <div className="notification-window">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="notification-item"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <h4>{notification.title}</h4>
                  <p>{notification.time}</p>
                  <p>{notification.content}</p>
                  <small>{notification.status}</small>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="user" onClick={handleProfileClick}>
          <div className="userInfo">
            <div className="avatar"></div>
            <div className="username">Tá Đức</div>
          </div>
        </div>

        <div
          className="moreInfo"
          onClick={() => {
            console.log("clicked");
            setIsDropdownOpen(!isDropdownOpen);
            console.log(isDropdownOpen);
          }}
        >
          <GoTriangleDown />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="menu-choice" onClick={handleProfileClick}>
                Cá nhân
              </div>
              <div className="menu-choice" onClick={handleSettingsClick}>
                Cài đặt
              </div>
              <div className="menu-choice" onClick={handleLogoutClick}>
                Đăng xuất
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedNotification && (
        <>
          <div className="overlay" onClick={closeNotificationModal}></div>
          <div className="notification-modal">
            <div className="notification-modal-content">
              <span className="closed-button" onClick={closeNotificationModal}>
                x
              </span>
              <h2>{selectedNotification.title}</h2>
              <p>{selectedNotification.time}</p>
              <p>{selectedNotification.content}</p>
              <small>{selectedNotification.status}</small>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
